// import React from 'react'
import { useContext} from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/post-list-store'
import NoPost from './NoPost';
import Loader from './Loader';

function PostList() {

  const { postList, fetched } = useContext(PostListData);
  
 

  return (
    <>
    {fetched && <Loader></Loader>}
    {!fetched && postList.length === 0 && <NoPost></NoPost>}
    {!fetched && postList.map((post) => <Post key={post.id} post={post}></Post>)}
    {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
    </>
  )
}

export default PostList