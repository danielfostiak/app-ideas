import Sidebar from "../../components/Sidebar";
import { getUserWithUsername } from "../../lib/firebase";

export async function getServerSideProps({ query }) {
  const { username } = query;
  const userDoc = await getUserWithUsername(username);
  console.log(userDoc);

  if (!userDoc) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: "1",
    },
  };
}

export default function Messages() {
  // getStaticPathsDummy();
  return (
    <>
      <Sidebar />
    </>
  );
}
