import { Link } from "react-router-dom";
import "./style.css";
export function Welcome() {

    return (
        <div className="welcome">
            <h1>Welcome to the Anime Quiz!</h1>
            <Link to="/instruction" className="read-instructions"><button>Read the Instructions</button></Link>
        </div>
    );
}