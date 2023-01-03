import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-3xl font-bold text-center text-gray-50">Home page</h1>
    </>
  );
}
