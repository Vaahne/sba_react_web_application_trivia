import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import logo from '../../assets/images/logo.jpg'
export default function NavBar(){
    // nav bar for the whole project
    return <nav className={styles.navBar}> 
            <ul>
                <li><img className={styles.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MBqEotsRLa9WLXDrxfC4T8gaU0tLDRAkMg&s'/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Categories</Link></li>
                <li><Link to="/aboutUs">About Us</Link>  </li>
            </ul>
        </nav>
}