import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

import "./Detail.css";

function Detail() {
const navigate = useNavigate()
const {id} = useParams();
const [character, setCharacter] = useState([]);

function navigateHandler () {
    navigate (`/Home`);
  };


useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);


  return (
    <div className="detail-container">
      <div className="img-container">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
      <div className="details">
        <div>
          <h3>Species:</h3>
          <p>{character.species}</p>
        </div>
        <div>
          <h3>Gender:</h3>
          <p>{character.gender}</p>
        </div>
        <div>
          <h3>Status:</h3>
          <p>{character.status}</p>
        </div>
        <div>
          <h3>Origin:</h3>
          <p>{character.origin?.name}</p>
        </div>
        <div>
          <h3>Location:</h3>
          <p>{character.location?.name}</p>
        </div>
        <button className="nav-buttom" onClick={navigateHandler}>Back</button>
      </div>
    </div>
    
  );

};


export default Detail;