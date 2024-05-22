import React from 'react'

function NoPost({handleFetch}) {
  return (
    // <div>
    //     <center className='nopost'>
    //         <h1>There are no posts</h1>
    //         <button type="button" className="btn btn-success">Get the Post</button>

    //     </center>
    // </div>
    <div className="bg-dark text-secondary px-4 py-5 text-center nopost-container">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Sorry No Post</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">You can get post by clicking button down below from the server. Enjoy....</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={handleFetch}>Get the Post</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NoPost