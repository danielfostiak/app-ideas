import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

export default function App({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

// change
