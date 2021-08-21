import React from 'react'
import {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css'
import { Questions } from '../Helpers/QuestionBank'

export const EndScreen = () => {
    const {score, setScore, setGameState} =useContext(QuizContext);

    const restart= ()=>{
        setScore(0);
        setGameState('menu');
    }

    return (
        <div className='EndScreen'>
            <h1>問答結束</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restart}>重新開始</button>
        </div>
    )
}
