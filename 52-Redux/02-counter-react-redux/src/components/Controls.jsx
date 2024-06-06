import { useRef } from "react";
import { useDispatch } from "react-redux";


const Controls = ()=> {

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch({type: "INCREMENT"});
    }

    const handleDecrement = () => {
        dispatch({type: "DECREMENT"});
    }

    const handleAddition = () => {
        dispatch({type: "ADD", payload: {
            data: inputElement.current.value,
        }});
        inputElement.current.value = "";
    }

    const handleSubtraction = () => {
        dispatch({type: "SUB", payload:{
            data:inputElement.current.value,
        }});
        inputElement.current.value = "";
    }

    const handlePrivacy = ()=> {
        dispatch({type: "PRIVACY_TOGGLE"});
    }
    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-success" onClick={handleIncrement}>Increment +</button>

            <button type="button" className="btn btn-danger" onClick={handleDecrement}>Decrement -</button>

          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-2">
          <input type="number" className="form-label CTinput" placeholder="Enter number" ref={inputElement}/>

            <button type="button" className="btn btn-primary" onClick={handleAddition}>Add +</button>
            <button type="button" className="btn btn-warning" onClick={handleSubtraction}>SUB -</button>

          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-2">
            <button type="button" className="btn btn-info" onClick={handlePrivacy}>Privacy</button>
          </div>
        </>
    )
}

export default Controls;