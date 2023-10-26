import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import "./Landing.css";

function Landing () {
    return (
        <div className="landing-container">
            <img src={logo} alt="logo"></img>
            <h1>Bienvenido!</h1>
            <Link to="/home" as="button" className="btn btn-outline-success btn-lg">
                Ingresar
            </Link>
        </div>
    )
};



export default Landing;