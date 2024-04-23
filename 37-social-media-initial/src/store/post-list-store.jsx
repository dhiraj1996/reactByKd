import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});



const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispachPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Noida",
    body: "Hello friends I am going to Noida to get a good offer. Hope you all are doing well",
    reactions: 2,
    userId: "user-1",
    tags: ["Tech", "Noida", "Enjoying"],
  },
  {
    id: "2",
    title: "Learning to code",
    body: "I am learning code and this is not a easy process but I will do at any cost",
    reactions: 15,
    userId: "user-9",
    tags: ["Coding", "Tech", "Hardwork"],
  },
];

export default PostListProvider;
