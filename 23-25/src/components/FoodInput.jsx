import styles from "./FoodInput.module.css"

function FoodInput({handleInput}) {
    // const handleOnChange = (e)=> {
    //     console.log(e.target.value)
    // }
  return (
    <input type='text' className={styles.input} placeholder="input"
    onKeyDown={handleInput}/>
  )
}

export default FoodInput