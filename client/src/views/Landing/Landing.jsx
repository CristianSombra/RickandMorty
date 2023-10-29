import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import "./Landing.css";

function Landing () {
    return (
        <div className="landing-container text-center">
            <img src={logo} alt="logo"></img>
                <div className="button">
                    <Link to="/home">
                        Ingresar
                    </Link>
                </div>
        </div>
    )
};



export default Landing;