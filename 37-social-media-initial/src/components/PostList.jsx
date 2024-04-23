// import React from 'react'
import { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/post-list-store'

function PostList() {

  const { postList } = useContext(PostListData);
  // console.log(postList);

  return (
    <>
    {postList.map((post) => <Post key={post.id} post={post} />)}
    {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
    </>
  )
}

export default PostList