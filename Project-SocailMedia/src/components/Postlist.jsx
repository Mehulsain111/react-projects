import { Post } from "./Post";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

export const Postlist = () => {
  const { postlist } = useContext(PostList);

  console.log(postlist);
  return (
    <>
      {postlist.map((post, index) => (
        <Post key={index} />
      ))}
    </>
  );
};
