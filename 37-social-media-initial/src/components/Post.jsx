// import React from 'react'
import { TbHttpDelete } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";


function Post({ post }) {
  return (
    <div
      className="card d-inline-flex p-2 post-card"
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-dark tag-but">
            {tag}
          </span>
        ))}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {post.reactions}
        </span>
      </div>
    </div>
  );
}

export default Post