import { useParams,useLocation } from "react-router-dom"
import {useState,useEffect}  from 'react';

export default function Score(){

    const[color,setColor] = useState('pink');
    // to get the data passed from other component or page via navigate
    const location = useLocation();
    const {score} = useParams();  // the param :score 
    const {scoreBoard} = location.state || [] ; // data passed from other component/page with name state

    // changes the color of score with some interval
    useEffect(()=>{ 
        let colorList = ['red','green','gold','glitter','silver','blue'];
        let index = 0
        
        const id= setInterval(() => {
            index++;
            setColor(colorList[index%colorList.length]);
        }, 500);

        return () => clearInterval(id);
    },[]);

    // displays all the details about quiz submitted with score
     function scoreBoardDisplay(){        
        return <div>
            <table className="scoreTable" border="1" >
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>User Answer</th>
                        <th>Correct Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreBoard.map((s,i)=>{
                        let bg = ''
                        if(s.userAnswer == s.correct_answer)
                            bg = 'green'
                        return <tr style={{background:bg}}>
                            <td>{i+1}.{s.question}</td>
                            <td>{s.userAnswer}</td>
                            <td>{s.correct_answer}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr >
                        <td colSpan='3' style={{textAlign:'center'}}>
                            <b style={{color:`${color}`}}> Total score Earned : {score} </b>
                       </td>
                    </tr>
                </tfoot>
            </table>
        </div>
       
    }

    return <div className="scoreCard">
        <h2>Score Board</h2>
        {scoreBoardDisplay()}
    </div>
}