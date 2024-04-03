import Items from "./Items";


function FoodItems({list}) {
    // let foodItems = ["Dal","Rice","Vegetable Curry", "Samosa", "Pizza"];
    // const handleButtonOnClick = (item)=> {
    //   console.log(`${item} is been clicked`)
    // }
    const onBuyButton = (item , event) => {
      console.log(event)
      console.log(`${item} bought`)
    }
    let dj = false;
  return (
    <>
    <ul className="list-group">
        {list.map((item)=>
            <Items key={item} foodList={item} 
              bought = {dj}
              handleButtonOnClick={(event)=> onBuyButton(item, event)}></Items>
            )}
      </ul>
    </>
  )
}

export default FoodItems