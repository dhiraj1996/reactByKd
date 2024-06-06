import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";


const Controls = ()=> {

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        // dispatch({type: "INCREMENT"});
        dispatch(counterActions.increment())
    }

    const handleDecrement = () => {
        // dispatch({type: "DECREMENT"});
        dispatch(counterActions.decrement());
    }

    const handleAddition = () => {
        dispatch(counterActions.add({data: inputElement.current.value}));

        // dispatch(counterActions.add(inputElement.current.value))
        //Or we can write like above and pass action.payload in store
        //Below in Subtract i wrote like this.

        inputElement.current.value = "";
    }

    const handleSubtraction = () => {
        //We can directly pass the payload.
        dispatch(counterActions.subtract(inputElement.current.value));
        inputElement.current.value = "";
    }

    const handlePrivacy = ()=> {
        dispatch(privacyActions.toggle());
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