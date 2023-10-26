import React, {useEffect} from 'react';
import Card from '../card/Card.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/actions.js';
import './cardsContainer.css';

const CardsContainer = () => {
   const characters = useSelector((state) => state.characters);
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <div class='container'>
    <div class='row'>
      {characters.map((character) => (
        <div className="col-md-3 mb-5" key={character.id}>
        <Card
          className="card"      
          key={characters.id}
          id={character.id}
          name={character.name}
          gender={character.gender}
          species={character.species}
          origin={character.origin}
          image={character.image}
          status={character.status}
        />
        </div>
      ))}
      </div>
    </div>
  );
};

export default CardsContainer;