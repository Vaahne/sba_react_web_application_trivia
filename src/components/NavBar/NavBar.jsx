import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import logo from '../../assets/images/logo.jpg'
export default function NavBar(){
    // nav bar for the whole project
    return <nav className={styles.navBar}> 
            <ul>
                <li><img className={styles.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MBqEotsRLa9WLXDrxfC4T8gaU0tLDRAkMg&s'/></li>
                <li><Link to="/" className={styles.navItems}>Home</Link></li>
                <li><Link to="/category" className={styles.navItems}>Categories</Link></li>
                <li><Link to="/aboutUs" className={styles.navItems}>About Us</Link>  </li>
            </ul>
        </nav>
}