import { Link } from "react-router-dom";
import "./About.css";

function About () {
    return (
        <div className="card-container">
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Proyecto Integrador Rick and Morty</h1>
                    <h2 class="card-subtitle mb-2">Bootcamp Henry</h2>
                    <p class="card-text">Éste proyecto se fue armando al realizar todas las homeworks de cada módulo cursado. Desde el Frontend hasta el Backend, se trabajó sobre los estilos, servidor y creación de base de datos. Sin embargo, éste pequeño proyecto cuenta con actualizaciones como código mas estructurado y aplicación de estilo mejorado y mediante Bootstrap se le pudo dar responsividad. Orgulloso de mi primer proyecto.</p>
                 </div>
            </div>   
                 <button>
                        <Link to="/Home">
                            <a class="nav-link" href="#">Inicio</a>
                        </Link>
                 </button>   
        </div>
    )
}

export default About;