import { Link } from 'react-router-dom';
import man from "../assets/man.svg"

function HomePage() {
  return (
    <>

      <div className="container col-xxl-8 px-4 py-5 homepage">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={man} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Post-it</h1>
        <p className="lead">“📚 Read, React, Repeat! 🚀” <br/>
            Feel free to use it as-is or customize it to fit your style. Happy posting! 😊👍
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to = "/create-post" >
              <button type="button" 
                className="btn btn-outline-secondary    btn-lg px-4">
                  Create Post
              </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default HomePage;