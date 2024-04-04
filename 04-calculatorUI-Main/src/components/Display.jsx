import styles from "./Display.module.css"

function Display({displayVal}) {
  return (
    <>
        <h1>CASIO</h1>
        <input type="text" className={styles["dj-input"]} value={displayVal} readOnly/>
    </>
  )
}

export default Display