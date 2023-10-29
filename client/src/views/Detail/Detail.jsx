import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Detail.css';



const Detail = () => {
    const { id } = useParams();
    const characters = useSelector((state) => state.characters);
    const character = characters.find((character) => character.id.toString() === id);
   
    if (!character) {
        return <p>No se encontró información para el país seleccionado.</p>;
    }


        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card small-card">
                            <img src={character.image} className="card-img-top img-fluid rounded" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <h3>Especie: {character.species}</h3>
                                <h3>Género: {character.gender}</h3>
                                <h3>Estado: {character.status}</h3>
                                <h3>Origen: {character.origin}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 offset-md-3">
                    <button class="nav-item">
                    <Link to="/Home">
                        <a class="nav-link" href="#">Inicio</a>
                    </Link>
                    </button>
                    </div>
                </div>
            </div>
        );

};


export default Detail;