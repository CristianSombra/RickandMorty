import img from "../../assets/error-404.png"
import { Link } from "react-router-dom";
import "./Favorites.css";


function Favorites () {
    return (
        <div className="container">
           <div className="row">
                <div className="img-fluid image">
                    <img src={img} alt="Error 404"/>
                </div>
            </div> 
            <div>
                <h2>Página en mantenimiento</h2>
            </div>
            <button class="nav-item">
                  <Link to="/Home">
                    <a class="nav-link" href="#">Inicio</a>
                  </Link>
            </button>
        </div>
    )
}

export default Favorites;