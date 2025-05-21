import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

export default function NavBar(){
    return <nav className={styles.navBar}> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/aboutUs">About Us</Link>  </li>
            </ul>
        </nav>
}