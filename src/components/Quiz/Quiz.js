import { useState } from "react";
import {questions, alt} from "../../utils/questionBank";
import { Result } from "../Result";
import "./style.css";
export function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (index, answer) => {
        if (index + 1 === answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const setImgSrc = (question) => {
        console.log(question);
        if(!question.image && !question.gif){
            return alt;
        }
        else if(!question.image){
            return question.gif;
        }
        return question.image;
    }

    return (
        <div className='app' >
            {showScore ? (
                <>
                    <Result
                        score={score}
                        questions={questions.length}
                    />
                </>
            ) : (
                <>
                    <div className='question-section'>
                    <img className="question_image" src = {setImgSrc(questions[currentQuestion])} alt = {alt}></img>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].options.map((answerOption , index) => (
                            <button onClick={() => handleAnswerOptionClick(index, questions[currentQuestion].answer[1])}>{answerOption}</button>
                        ))}
                    </div>
                </>
            )}
        </div >
    );
}