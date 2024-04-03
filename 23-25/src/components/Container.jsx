import styles from "./Container.module.css"

const Container = ({children})=> {
    return(
        <div className={styles["outer-container"]}>
            {children}
        </div>
    )
}

export default Container