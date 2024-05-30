import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetched: false,
  deletePost: () => {},
});



const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  }else if(action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }else if(action.type === "ADD_INITIAL_POSTS"){
    newPostList = action.payload.posts;
  }
  
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetched, setFetched] = useState(false);
 

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    })
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts : posts,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      }
    })
  };
    
  useEffect(()=> {
    setFetched(true);
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{
      addInitialPosts(data.posts);
      setFetched(false);
    });
    
  }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        fetched: fetched,
      }}
    >
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
