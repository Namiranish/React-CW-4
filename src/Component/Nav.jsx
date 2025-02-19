import styles from "./Nav.module.css";
import img from "../assets/logo.svg"
const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <img src={img} />
                <h1>GeekFoods</h1>
            </div>

            <ul className={styles.navLinks}>
                <a href="#"><li style={{color: '#1E40AF'}}>Home</li></a>
                <a href="#"><li>Quote</li></a>
                <a href="#"><li>Restaurants</li></a>
                <a href="#"><li>Foods</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>

            <button className={styles.button}>Get started</button>
        </nav>
    );
};

export default Nav;
