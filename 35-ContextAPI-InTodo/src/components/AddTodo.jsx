import { useRef} from "react";

function AddTodo({addItems}) {

  const inputRefItem = useRef();
  const dueRefDate = useRef();


  const handleAddButtonClicked = ()=> {
    const refItem = inputRefItem.current.value;
    const refDate = dueRefDate.current.value;
    addItems(refItem, refDate);
    
    //After entering todo to clearing the input item.
    inputRefItem.current.value = "";
    dueRefDate.current.value = "";

    
  };


  return (
    <>
      <div className="container text-start">
        <div className="row dj-row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here"
            ref={inputRefItem}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueRefDate} required/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-outline-success dj-button" 
            onClick={handleAddButtonClicked}
            >Add</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo