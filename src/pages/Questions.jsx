import {  useContext, useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom";
import categoryContext from "../context/categoryContext";

export default function Questions(){
    let scoreBoard = [];
    const[userAnswers,setUserAnswers] = useState(null);
    const[loading,setLoading] = useState(true);
    const[questions,setQuestions] = useState(null);
    
    const nav = useNavigate();
    const {cat} = useParams();

    const categories = useContext(categoryContext);

    useEffect(()=>{

         function getQuestions(){
            if(!cat) return
            setLoading(true);

            fetch(`https://opentdb.com/api.php?category=${cat}&type=multiple&amount=10`)
                 .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                     return response.json();                
                 }).then(data =>{
                    const questionsList = data.results;
                    const formattedData = questionsList.map((q)=>(
                        {                        
                            ...q,
                            random: shuffleOptions([q.correct_answer,...q.incorrect_answers])
                        }
                    ))                    
                    setQuestions(formattedData || []);
                    setLoading(false);
                 }).catch(err=>{
                    console.error(err.message);
                 }).finally(()=>{
                    console.log('Finally!!!');
                 });
        }
        getQuestions();
    },[]);

    function handleChange(index,ans){
        setUserAnswers(prev=>({
            ...prev,
            [index]:ans
            })
        );
    }

    function handleClick(){
        let score = 0;
        if(userAnswers){
            questions.forEach((q,i)=>{
                if(!userAnswers[i]) userAnswers[i] = '';
                scoreBoard[i] = {question : q.question, userAnswer : userAnswers[i], correct_answer: q.correct_answer};
                console.log(userAnswers[i],' correct ans', q.correct_answer);
                if(userAnswers[i] == q.correct_answer)
                    score += 1;
             });
            //  setShowScoreBoard(true);
            nav(`/score/${score}`,{
                state : {scoreBoard} 
            })
        }else    
             alert('Please answer the questions!!');
    }

   
    function shuffleOptions(options){
        for( let position = options.length -1 ; position>0;position--){
            let randomPosition = Math.floor(Math.random() * (position+1));
            [options[randomPosition],options[position]] = [options[position],options[randomPosition]];
        }
        return options;
    }

    function renderContent(){
        const render = questions.map((q,index)=>{
            // console.log('options', q.random);            
            return (  
             <div key={index} >
                <div className="question" >{index+1}.{q.question}</div>

                {q.random.map((ans, i) => (
                    <label key={i}>
                        <input type="radio" onChange={()=>handleChange(index,ans)} value={ans} name={`question${index}`} />
                        {ans}
                    </label>
                ))} 
            </div>
             )
        })
        return {render};
    }

    return <> {     
        loading ? (<h1>Loading ...</h1>): 
        <>  <div className="questionsDiv">
            {renderContent()}
             <button className="questionsSubmit"  onClick={handleClick}>Submit</button>
             </div>
         </>
         
    }</>
}