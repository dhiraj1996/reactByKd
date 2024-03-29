import styles from "./Items.module.css"

function Items({foodList}) {
  return (
    <>
    <li className= {styles["dj-item"]}>
      <span className={styles["dj-span"]}>{foodList}</span>
      </li>
    </>
  )
}

export default Items