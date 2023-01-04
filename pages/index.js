import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
        Home
      </h1>
    </>
  );
}
