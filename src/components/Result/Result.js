import React from 'react';
import { useHistory } from "react-router-dom";
import "./style.css";

export function Result(props) {

    const history = useHistory();
    const handleReset = (e) => {
        e.preventDefault();
        history.push('/');
    };

    return (
        <div className='app'>
            <div className="wrapper">
                <div className='score-section'>
                    Thanks for taking the Anime Quiz!
                    <br />
                    You scored {props.score} out of {props.questions}.
                </div>
                <div className="reset-quiz">
                    <button onClick={handleReset}>Reset Quiz</button>
                </div>
            </div >
        </div >
    );
}