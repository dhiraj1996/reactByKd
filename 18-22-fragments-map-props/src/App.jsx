import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';


function App() {

  let foodItems = ["Dal","Rice","Vegetable Curry", "Samosa", "Pizza"];
  // let foodItems = [];


  return (
    <>
      <h1 className='heading'>Food we eat</h1>
      <ErrorMessage list={foodItems}/>
      <FoodItems list={foodItems}></FoodItems>
    </>
  )
}

export default App
