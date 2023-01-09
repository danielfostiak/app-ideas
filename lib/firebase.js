import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

var _ = require("lodash");

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// AUTH
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// DATABASE
export const firestore = firebase.firestore();

// HELPER FUNCTIONS
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function ideaToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
  };
}

// import { useState, useContext, useEffect } from "react";
// import { UserContext } from "../../lib/context";
// import CreateIdea from "../../components/CreateIdea";
// import Sidebar from "../../components/Sidebar";
// import { getUserWithUsername, ideaToJSON } from "../../lib/firebase";

// export async function getServerSideProps({ query }) {
//   const { username } = query;
//   const userDoc = await getUserWithUsername(username);

//   if (!userDoc) {
//     return {
//       notFound: true,
//     };
//   }

//   let user = null;
//   let ideas = null;

//   if (userDoc) {
//     user = userDoc.data();
//     const ideasQuery = userDoc.ref.collection("ideas");
//     ideas = (await ideasQuery.get()).docs.map(ideaToJSON);
//   }

//   return {
//     props: { user, ideas },
//   };
// }

// export default function Ideas({ user, ideas }) {
//   const { username } = useContext(UserContext);
//   const [creating, setCreating] = useState(true);

//   const toggleCreating = () => {
//     setCreating(!creating);
//   };

//   return (
//     <div>
//       <Sidebar
//         userData={user}
//         ideas={ideas}
//         setCreating={setCreating}
//         toggleCreating={toggleCreating}
//       />
//       {creating && username == user.username ? <CreateIdea /> : null}
//     </div>
//   );
// }
