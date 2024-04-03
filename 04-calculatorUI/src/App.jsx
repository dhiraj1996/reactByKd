import "./App.css"
import Buttons from "./components/Buttons";

function App() {

  return (
    <>
      <div className="container-body">
        <div className="calculator-container text-center border border-black">
          <h1>Calculator </h1>
          <input type="text" placeholder="0" />
          <div className="button-container">
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
