import PostMain from "./PostMain";

const PostBox = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostMain 
        type={post.type}
        locationType={post.locationType}
        title={post.title}
        body={post.body}
        location={post.location}
        comments={post.comments}
        likes={post.likes}
         />
      ))}
    </div>
  );
};

export default PostBox;
