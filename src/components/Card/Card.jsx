import { Link, useNavigate } from 'react-router-dom';
import style from './Card.module.css';
import Modal from 'react-modal';
import { useState } from 'react';

export default function Card({category}){
    const[isOpen,setIsOpen] = useState(false);    
    const nav = useNavigate();

    
    function handleClick(){
        nav(`/questions/${category.id}`);
    }

    return <>
        
            <Modal className={style.modalStyle} isOpen={isOpen}  onRequestClose={()=>setIsOpen(false)}>
                    <h2>Are you ready to start the quiz?</h2>
                    <button onClick={handleClick}>Start Quiz</button>
                    <button onClick={()=>setIsOpen(false)}>Close</button>
            </Modal>
        <div className={style.card}>
                <Link onClick={()=>setIsOpen(true)} >{category.name}</Link>
        </div>
    </>
}