import React, {useEffect, useState} from 'react';
import Card from '../card/Card.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../redux/actions.js';
import './cardsContainer.css';

const CardsContainer = () => {
   const characters = useSelector((state) => state.characters);
   const dispatch = useDispatch();
   const [currentPage, setCurrentPage] = useState(1);
   const cardsPerPage = 4;

   useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

    // Calcular los índices de las cards a mostrar en la página actual
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard);
  
    // Función para cambiar a la página anterior
    const goToPreviousPage = (e) => {
      e.preventDefault();
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    // Función para cambiar a la página siguiente
    const goToNextPage = (e) => {
      e.preventDefault();
      setCurrentPage((prevPage) => prevPage + 1);
    };

  return (
    <div class='container'>
    <div class='row'>
      {currentCards.map((character) => (
        <div className="col-md-3 mb-5" key={character.id}>
        <Card
          className="card"      
          key={character.id}
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
       <div className='row justify-content-center'>
         <div className='col-auto'>
           <button
            type="button"
             onClick={(e) => goToPreviousPage(e)}
             disabled={currentPage === 1}
           >
             Anterior
           </button>
           <button
             type="button"
             onClick={(e) => goToNextPage(e)}
             disabled={indexOfLastCard >= characters.length}
           >
             Siguiente
           </button>
         </div>
       </div>
     </div>
   );
};

export default CardsContainer;