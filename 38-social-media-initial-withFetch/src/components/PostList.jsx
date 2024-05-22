// import React from 'react'
import { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/post-list-store'
import NoPost from './NoPost';

function PostList() {

  const { postList, addInitialPosts } = useContext(PostListData);
  // console.log(postList);

  const handleFetchButton = ()=> {
    console.log("Button is clicked");
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{
      addInitialPosts(data.posts);
    });
  }

  return (
    <>{postList.length === 0 && <NoPost handleFetch={handleFetchButton}></NoPost>}
    {postList.map((post) => <Post key={post.id} post={post} />)}
    {/* <Post></Post>
    <Post></Post>
    <Post></Post> */}
    </>
  )
}

export default PostList