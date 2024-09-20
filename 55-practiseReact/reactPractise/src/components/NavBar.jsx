import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles["nav-bar"]}>
        <ul>
            <NavLink to={"/"} className={styles["list-item"]}>
                Home
            </NavLink> 
            <NavLink to={"/about"} className={styles["list-item"]}>
                <li>About</li>
            </NavLink>
            <NavLink to={"/contact"} className={styles["list-item"]}>
                <li>Contact</li>
            </NavLink>
            <NavLink to={"/login"} className={styles["list-item"]}>
                <li>Login</li>
            </NavLink>
        </ul>
        
    </div>
  )
}

export default NavBar