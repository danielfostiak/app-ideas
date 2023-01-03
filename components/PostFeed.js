export default function PostFeed({ posts }) {
  return posts
    ? posts.map((post, index) => <PostItem post={post} key={index} />)
    : null;
}

function PostItem({ post }) {
  return <p>{post}</p>;
}
