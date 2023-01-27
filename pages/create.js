import CreateIdea from "../components/CreateIdea";
import { firestore, fromMillis } from "../lib/firebase";
import { UserContext } from "../lib/context";
import { useContext, useState } from "react";

export default function Create() {
  const { user, username } = useContext(UserContext);
  const [posted, setPosted] = useState(false);

  const onSubmit = async (title, description, content) => {
    if (!title || !description || !content) {
      alert("Fill out form fully");
      return;
    }
    try {
      const id = title.replace(/\s+/g, "-").toLowerCase();
      const ideasRef = firestore.doc(`users/${user.uid}`).collection("ideas");

      await ideasRef.doc(id).set({
        title,
        description,
        content,
        id,
        username,
        createdAt: fromMillis(new Date().getTime()),
      });
      setPosted("posted");
    } catch (error) {
      console.log(error);
      setPosted("error");
    }
  };

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
        Create Idea
      </h1>
      {posted ? (
        <Success posted={posted} />
      ) : (
        <CreateIdea handleSubmit={onSubmit} />
      )}
    </>
  );
}

function Success({ posted }) {
  return posted === "posted" ? (
    <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
      Successfully posted
    </h1>
  ) : (
    <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
      Error in posting, please try again
    </h1>
  );
}
