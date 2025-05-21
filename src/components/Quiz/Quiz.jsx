import { Link, useParams } from 'react-router-dom';
import style from './Quiz.module.css';
export default function Quiz(){
    const {cat} = useParams();

    return <>
        <Link to={`/questions/${cat}`}>Start Quiz</Link>
    </>
}