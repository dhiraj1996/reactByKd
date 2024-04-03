import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import FoodInput from "./components/FoodInput";
import { useState } from "react";


function App() {

  // let foodItems = ["Dal","Rice","Vegetable Curry", "Samosa", "Pizza"];
  // let foodItems = [];
  

  // let [textToShow, setTextToShow] = useState("hello");
  // let text = textToShow[0];
  // let setText = textToShow[1];
  // console.log(textToShow);

  // let [textToShow, setTextToShow] = useState("helloo")

  // const handleOnChange = (e)=> {
  //   // console.log(e.target.value);
  //   setTextToShow(e.target.value);
  // }
  
  let [foodItems , setFoodItems] = useState([])
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value)
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);
    }
  }

  return (
    <>
    <Container>
      {/* check out why direct selecting h1 in css is not working */}
    <h1 className='heading'>Food we eat</h1>
      
      <FoodInput handleInput={handleOnKeyDown}/>
      <ErrorMessage list={foodItems}/>
      <FoodItems list={foodItems}></FoodItems>
    </Container>
    
    {/* <Container>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae dolorum, impedit odio ducimus fuga nisi blanditiis, delectus, incidunt similique distinctio? Provident, fuga? Libero eveniet alias odit cum voluptatibus officia non, beatae nam qui quasi eum soluta, repudiandae veniam excepturi.</p>
    </Container> */}
    </>
  )
}

export default App
