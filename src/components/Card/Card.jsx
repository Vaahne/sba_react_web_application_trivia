import { Link, useNavigate } from 'react-router-dom';
import style from './Card.module.css';
import Modal from 'react-modal';
import { useState } from 'react';

export default function Card({category}){
    const[isOpen,setIsOpen] = useState(false);    // set to true or false to modal open or close
    const nav = useNavigate(); // for navigating to other pages

    
    function handleClick(){
        nav(`/questions/${category.id}`); // navigating to questions page
    }

    return <>
            {/*  this is a modal from react-modal that opens for the confirmation to start quiz or not */}
            <Modal className={style.modalStyle} isOpen={isOpen}  onRequestClose={()=>setIsOpen(false)}>
                    <h2>Are you ready to start the quiz?</h2>
                    <button onClick={handleClick}>Start Quiz</button>
                    <button onClick={()=>setIsOpen(false)}>Close</button>
            </Modal>
            {/* this is a card for each category  */}
        <div className={style.card}>
                <Link onClick={()=>setIsOpen(true)} >{category.name}</Link>
        </div>
    </>
}