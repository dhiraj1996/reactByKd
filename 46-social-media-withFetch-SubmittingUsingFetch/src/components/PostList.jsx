// import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/post-list-store'
import NoPost from './NoPost';
import Loader from './Loader';

function PostList() {

  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetched, setFetched] = useState(false);
  // console.log(postList);


  // This is how useState works here and below this useEffect

  // const [dataFetched, setDataFetched] = useState(false);

  // if (!dataFetched) {
  //   fetch('https://dummyjson.com/posts')
  //   .then(res => res.json())
  //   .then((data)=>{
  //     addInitialPosts(data.posts);
  //   });
  //   setDataFetched(true);
  // }

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
    <>
    {fetched && <Loader></Loader>}
    {!fetched && postList.length === 0 && <NoPost></NoPost>}
    {!fetched && postList.map((post) => <Post key={post.id} post={post} />)}
    {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
    </>
  )
}

export default PostList