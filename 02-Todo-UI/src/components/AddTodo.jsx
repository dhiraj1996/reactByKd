

function AddTodo() {
  return (
    <>
      <div className="container text-start">
        <div className="row dj-row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            {/* <button type="button" className="btn btn-danger dj-button">
              Add
            </button> */}
            <button type="button" className="btn btn-outline-success dj-button">Add</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo