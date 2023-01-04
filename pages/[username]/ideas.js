import Sidebar from "../../components/Sidebar";
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
    const ideasQuery = userDoc.ref.collection("ideas").limit(5);
    ideas = (await ideasQuery.get()).docs.map(ideaToJSON);
  }

  return {
    props: { user, ideas },
  };
}

export default function Messages({ user, ideas }) {
  // getStaticPathsDummy();
  return (
    <>
      <Sidebar userData={user} ideas={ideas} />
    </>
  );
}
