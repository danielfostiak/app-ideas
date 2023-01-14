import IdeaItem from "./IdeaItem";

export default function IdeaFeed({ ideas }) {
  return (
    <div className="grid grid-cols-3 mx-auto px-2 max-w-7xl">
      {ideas
        ? ideas.map((idea, index) => (
            <IdeaItem
              username={idea.username}
              title={idea.title}
              content={idea.content}
              createdAt={idea.createdAt}
              id={idea.id}
              key={index}
            />
          ))
        : null}
    </div>
  );
}
