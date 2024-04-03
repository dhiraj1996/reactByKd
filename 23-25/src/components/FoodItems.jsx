import Items from "./Items";
import { useState } from "react";

function FoodItems({list}) {
    // let foodItems = ["Dal","Rice","Vegetable Curry", "Samosa", "Pizza"];
    // const handleButtonOnClick = (item)=> {
    //   console.log(`${item} is been clicked`)
    // }
    let [activeItems, setActiveItems] = useState([])

      const onBuyButton = (item) => {
      // console.log(event)
      // console.log(`${item} bought`)
      let items = [...activeItems,item]
      setActiveItems(items)
    }

  return (
    <>
    <ul className="list-group">
        {list.map((item, index)=>
            <Items key={index} foodList={item} 
              bought = {activeItems.includes(item)}
              handleButtonOnClick={()=> onBuyButton(item)}></Items>
            )}
      </ul>
    </>
  )
}

export default FoodItems