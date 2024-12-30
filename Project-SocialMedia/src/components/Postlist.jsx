// import { Post } from "./Post";
// import { useContext } from "react";
// import { PostList } from "../store/post-list-store";

// export const Postlist = () => {
//   const { postlist } = useContext(PostList);

//   console.log(postlist);
//   return (
//     <>
//       {postlist.map((post, index) => (
//         <Post key={index} post={post} />
//       ))}
//     </>
//   );
// };
import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
