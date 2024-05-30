// import React from 'react'
import { TbHttpDelete } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";


function Post({ post }) {
  
  const {deletePost} = useContext(PostList);

  return (
    // <div className="post-card-container">

    <div
    className="card d-inline-flex p-2 post-card"
    style={{ width: "19rem", height: "350px" }}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-title para">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-dark tag-but tag-container">
            {tag}
          </span>
        ))}
        
        <button
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger btn"
          onClick={() => deletePost(post.id)}
          >
          <TbHttpDelete />
        </button>
        <div className="bottom-container">
        <div className="alert alert-danger" role="alert">
        Total reaction in this post       
            <span className="badge text-bg-success reaction">
              <AiOutlineLike />
              {post.reactions.likes}
            </span>
        </div>
        </div>
      </div>
    </div>
  // </div>
  );
}

export default Post