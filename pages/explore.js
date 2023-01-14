import IdeaFeed from "../components/IdeaFeed";
import Head from "next/head";

const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium suscipit ex in malesuada. Sed in lorem pellentesque, interdum nunc a, imperdiet mi. Proin sit amet tempus nibh. Nulla dignissim.";

const dummyPosts = [
  {
    author: "daniel",
    title: "8 Ball Pool Simulator",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "Calculator App",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "Music Rooms",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "Chess 2",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "Blackjack Game",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "Random App",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "DND game",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "Personal CV",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "App Ideas Website",
    content: loremipsum,
    createdAt: "Today",
  },
  {
    author: "daniel",
    title: "3D FPS",
    content: loremipsum,
    createdAt: "Today",
  },
];

export default function Explore() {
  return (
    <>
      <Head>
        <title>Explore</title>
      </Head>
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-background md:text-5xl lg:text-6xl dark:text-white">
        Explore
      </h1>
      <IdeaFeed ideas={dummyPosts} />
    </>
  );
}
