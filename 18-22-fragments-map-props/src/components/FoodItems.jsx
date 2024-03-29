import Items from "./Items";


function FoodItems({list}) {
    // let foodItems = ["Dal","Rice","Vegetable Curry", "Samosa", "Pizza"];

  return (
    <>
    <ul className="list-group">
        {list.map((item)=>
            <Items key={item} foodList={item}></Items>
            )}
      </ul>
    </>
  )
}

export default FoodItems