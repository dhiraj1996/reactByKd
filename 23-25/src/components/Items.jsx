import styles from "./Items.module.css"

function Items({foodList, handleButtonOnClick, bought }) {
  // const handleButtonOnClick = ()=> {
  //   console.log(`${foodList} is the item`);
  // }

  return (
    <>
    <li className= {`${styles["dj-item"]} list-group-item`}>
      <span className= {styles["dj-span"]}>{foodList}</span>
      <button type="button" 
        className={`${styles.button} btn btn-info`} 
        onClick={handleButtonOnClick}>Buy</button>
      </li>
    </>
  )
}

export default Items