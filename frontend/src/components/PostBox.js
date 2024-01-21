import PostMain from "./PostMain";

const PostBox = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostMain post={post} />
      ))}
    </div>
  );
};

export default PostBox;
