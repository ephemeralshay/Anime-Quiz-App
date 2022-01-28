import { Link } from "react-router-dom";
import "./style.css";
export function Instruction() {

    return (
        <div className="app">
            <div className="instructions">
                <h1>Instructions</h1>
                <p>1. Once you select your answer, you cannot reselect.</p>
                <p>2. You cannot exit from the Quiz while you are playing. </p>
                <p>3. You will get points on the basis of your correct answers.</p>
                <Link to="/quiz" className="proceed"><button>Proceed to the Quiz!</button></Link>
            </div>
        </div>
    );
}