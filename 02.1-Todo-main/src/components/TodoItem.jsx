function TodoItem({ todoName, todoDate = "not defined" }) {
  return (
      <div className="container text-start">
            
          <div className="row dj-row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
            <button type="button" className="btn btn-outline-danger dj-button">Delete</button>
            </div>
          </div>
  
      </div>
    
  );
}

export default TodoItem;
