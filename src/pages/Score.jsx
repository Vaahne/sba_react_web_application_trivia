import { useParams,useLocation } from "react-router-dom"

export default function Score(){
    console.log('welcome');
    const location = useLocation();
    const {score} = useParams();

    const {scoreBoard} = location.state || [] ;

     function scoreBoardDisplay(){
        console.log('hi');
        return <div>
            <table className="scoreTable" border="1">
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
                <footer>
                    <tr>
                        Score : {score}
                    </tr>
                </footer>
            </table>
        </div>
    }


    // console.log('score from score',score)
    return <div className="scoreCard">
        {scoreBoardDisplay()}
    </div>
}