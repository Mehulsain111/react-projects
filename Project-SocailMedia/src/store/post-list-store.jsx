import { createContext, useReducer } from "react";
// its work is only show the currunt  state
export const PostList = createContext({
  postlist: [],
  addlist: () => {},
  deletelist: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "good morning",
    body: "My morning in dubai",
    reaction: 1,
    userId: "",
    tags: ["vacation", "dubai"],
  },
];

const postlistReducer = (currpostlist, action) => {
  return currpostlist;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchpostlit] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );

  const addlist = () => {};

  const deletelist = () => {};

  return (
    <PostList.Provider
      value={{
        postlist,
        addlist,
        deletelist,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
