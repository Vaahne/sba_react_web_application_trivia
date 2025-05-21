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
        <div className={styles.sideContent}>
            <img src="https://media.tenor.com/1dKzIzThtzgAAAAM/trivia-day-happy-trivia-day.gif" />
            <img src="https://media.tenor.com/xyvcwiSy0V0AAAAM/trivia-trivia-time.gif"/>
            <img src="https://media2.giphy.com/media/26FPqtXZkuciQPklO/200w.gif?cid=6c09b9522ct1ziqlu2qw85bzvtbbgsdirbp3xycf7m5d4z13&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
        </div>
        <div className={styles.homeButtons}>
            <button onClick={handleClick} name="start">Start Quiz</button>
            <button onClick={handleClick} name="random">Random Quiz</button>
        </div>
        <div className={styles.sideContent}>
            <img src="https://media.tenor.com/1dKzIzThtzgAAAAM/trivia-day-happy-trivia-day.gif" />
            <img src="https://media.tenor.com/xyvcwiSy0V0AAAAM/trivia-trivia-time.gif" />
            <img src="https://media2.giphy.com/media/26FPqtXZkuciQPklO/200w.gif?cid=6c09b9522ct1ziqlu2qw85bzvtbbgsdirbp3xycf7m5d4z13&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
        </div>
    </div>  
}