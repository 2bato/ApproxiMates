import PostMain from "./PostMain";

const PostBox = ({ posts, onEditPost }) => {
  const reversedPosts = [...posts].reverse();
  return (
    <div className="my-20">
      {reversedPosts.map((post) => (
        <PostMain
          type={post.type}
          locationType={post.locationType}
          title={post.title}
          body={post.body}
          location={post.location}
          comments={post.comments}
          likes={post.likes}
          onEditPost={onEditPost}
          id={post._id}
        />
      ))}
    </div>
  );
};

export default PostBox;
