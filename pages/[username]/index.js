import IdeaFeed from "../../components/IdeaFeed";
import { getUserWithUsername, ideaToJSON } from "../../lib/firebase";

export async function getServerSideProps({ query }) {
  const { username } = query;
  const userDoc = await getUserWithUsername(username);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }
  let user = null;
  let ideas = null;

  if (userDoc) {
    user = userDoc.data();
    const ideasQuery = userDoc.ref.collection("ideas");
    ideas = (await ideasQuery.get()).docs.map(ideaToJSON);
  }

  return {
    props: { username, user, ideas },
  };
}

export default function Profile({ username, user, ideas }) {
  console.log(ideas);
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
        {username}'s Profile
      </h1>
      <IdeaFeed ideas={ideas} />
    </>
  );
}
