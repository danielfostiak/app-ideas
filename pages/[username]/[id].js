import { create } from "lodash";
import { firestore, getUserWithUsername, ideaToJSON } from "../../lib/firebase";

export async function getStaticProps({ params }) {
  const { username, id } = params;
  const userDoc = await getUserWithUsername(username);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  let idea;
  let path;

  if (userDoc) {
    const ideaRef = userDoc.ref.collection("ideas").doc(id);
    idea = ideaToJSON(await ideaRef.get());

    if (!idea.id) {
      return {
        notFound: true,
      };
    }

    path = ideaRef.path;
  }

  return {
    props: { idea, path },
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collectionGroup("ideas").get();

  const paths = snapshot.docs.map((doc) => {
    const { username, id } = doc.data();
    return {
      params: { username, id },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export default function IdeaPage({ idea, path }) {
  const { title, username, createdAt, id, content } = idea;
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
        {title}
      </h1>
      <p>{content}</p>
      <p>
        Created by {username}, at {createdAt}
      </p>
    </>
  );
}
