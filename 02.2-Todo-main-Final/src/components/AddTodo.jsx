import { useState } from "react";

function AddTodo({addItems}) {
  const [inputItem, setInputItem] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  

  const handleInput =(e) =>{
    // let result = e.target.value;
    // console.log(e.target.value);
    setInputItem(e.target.value);
    // setInputItem("");

  };
  const handleDueDate = (e) => {
    // let result = e.target.value;
    // console.log(`due date is ${e.target.value}`);
    setNewDueDate(e.target.value)
  };

  const handleAddButtonClicked = (e)=> {
    // event.preventDefault();
    if (inputItem && newDueDate){
      addItems(inputItem,newDueDate);
      setInputItem("");
      setNewDueDate("");
    }else{
      alert("Input task and date");
    }
    
  };
  return (
    <>
      <div className="container text-start">
        <div className="row dj-row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here"
            value={inputItem}
            onChange={handleInput}/>
          </div>
          <div className="col-4">
            <input type="date" value={newDueDate} onChange={handleDueDate} required/>
          </div>
          <div className="col-2">
            {/* <button type="button" className="btn btn-danger dj-button">
              Add
            </button> */}
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