import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";
import { Theme } from "react-daisyui";

export default function App({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Theme dataTheme="dracula">
        <Navbar />
        <Component {...pageProps} />
      </Theme>
    </UserContext.Provider>
  );
}
