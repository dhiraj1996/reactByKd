// import React from 'react'

import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreatePost() {

  const{ addPost } = useContext(PostList)

  const userIdData = useRef()
  const titleData = useRef()
  const bodyData = useRef()
  const reactionData = useRef()
  const tagData = useRef()

  const handleSubmit= (event)=> {
    event.preventDefault;
    const userId = userIdData.current.value;
    const postTitle = titleData.current.value;
    const postBody = bodyData.current.value;
    const reactions = reactionData.current.value;
    const tags = tagData.current.value.split("#");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdData.current.value = " ";
    titleData.current.value = "";
    bodyData.current.value = "";
    reactionData.current.value = "";
    tagData.current.value = "";
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
        User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdData}
          // aria-describedby="emailHelp"
          required
        />
        {/* <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleData}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="body"
          rows={4}
          cols={50}
          ref={bodyData}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reaction
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          ref={reactionData}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagData}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost