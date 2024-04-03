
function TodoItem2() {
    let item = "Buy Milk";
    let date = "21/01/96";
  return (
    <div className="container text-start">
          
        <div className="row dj-row">
          <div className="col-6">{item}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger dj-button">
              Delete
            </button>
          </div>
        </div>

    </div>
  )
}

export default TodoItem2