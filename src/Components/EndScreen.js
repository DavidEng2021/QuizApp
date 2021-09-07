import React from 'react'
import {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css'
import { Questions } from '../Helpers/QuestionBank'
import goodJob from "../images/good.jpg"
import badJob from "../images/bed.png"

export const EndScreen = () => {
    const {score, setScore, setGameState} =useContext(QuizContext);

    const restart= ()=>{
        setScore(0);
        setGameState('menu');
    }

    return (
        <>
        <div className='EndScreen'>
            <h1>問答結束</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restart}>重新開始</button>
        </div>
        <div className='scoreDiv'>
        {score == 0 && <img className="bad" src={badJob}/>}
        {score == 1 && <img className="good" src={goodJob} />}
        {score == 2 && <><img className="good" src={goodJob} /> <img class="good" src={goodJob} /></>}
        {score == 3 && <><img className="good" src={goodJob} /> <img class="good" src={goodJob} /> <img class="good" src={goodJob} /></>}
        </div>    
        </>

    )
}
