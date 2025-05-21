import { useParams,useLocation } from "react-router-dom"
import {useState,useEffect}  from 'react';

export default function Score(){

    const[color,setColor] = useState('pink');
    
    const location = useLocation();
    const {score} = useParams();
    const {scoreBoard} = location.state || [] ;


    useEffect(()=>{
        let colorList = ['red','green','gold','glitter','silver','blue'];
        let index = 0
        
        const id= setInterval(() => {
            index++;
            setColor(colorList[index%colorList.length]);
        }, 500);

        return () => clearInterval(id);
    },[]);

     function scoreBoardDisplay(){
        
        return <div>
            <table className="scoreTable" border="1" style={{border:`.3rem solid  ${color}`}}>
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
                            <b> Total score Earned : {score} </b>
                       </td>
                    </tr>
                </tfoot>
            </table>
        </div>
       
    }


    // console.log('score from score',score)
    return <div className="scoreCard">
        {scoreBoardDisplay()}
    </div>
}