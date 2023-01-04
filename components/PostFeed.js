import PostItem from "./PostItem";

export default function PostFeed({ posts }) {
  return (
    <div className="grid grid-cols-3 mx-auto px-2 max-w-7xl">
      {posts
        ? posts.map((post, index) => (
            <PostItem
              author={post.author}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              id={index}
              key={index}
            />
          ))
        : null}
    </div>
  );
}
