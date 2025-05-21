import { useNavigate } from "react-router-dom"

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
    return <div className="homeContent">
        <button onClick={handleClick} name="start">Start Quiz</button>
        <button onClick={handleClick} name="random">Random Quiz</button>
    </div>  
}