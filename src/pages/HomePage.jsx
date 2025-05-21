import { useNavigate } from "react-router-dom";
import styles from './HomePage.module.css';

export default function HomePage(){
    const nav = useNavigate();

    function handleClick(e){
        
        if(e.target.name == 'random'){
            console.log(e.target.name);
            const random = Math.floor(Math.random() * 24) +9;
            console.log(random);
            nav(`/questions/${random}`);
        }else
            nav(`/category`);
    }
    return <div className={styles.homeContent}>
        <div className={styles.leftContent}>
            <img src="https://media.tenor.com/1dKzIzThtzgAAAAM/trivia-day-happy-trivia-day.gif" />
            <img src="https://media.tenor.com/xyvcwiSy0V0AAAAM/trivia-trivia-time.gif"/>
        </div>
        <div className={styles.homeButtons}>
            <button onClick={handleClick} name="start">Start Quiz</button>
            <button onClick={handleClick} name="random">Random Quiz</button>
        </div>
        <div className={styles.rightContent}>
            <img src="https://media.tenor.com/1dKzIzThtzgAAAAM/trivia-day-happy-trivia-day.gif" />
            <img src="https://media.tenor.com/xyvcwiSy0V0AAAAM/trivia-trivia-time.gif" />
        </div>
    </div>  
}