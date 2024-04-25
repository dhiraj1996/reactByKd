import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});



const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  }else if(action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      }
    })
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      }
    })
  };
    
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
