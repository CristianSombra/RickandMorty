// import characters from '../../data';
import {useNavigate} from 'react-router-dom';
import {addFavorite, removeFavorite} from "../../redux/actions";
import { useState, useEffect } from 'react';
import {connect} from "react-redux";
import './Card.css';


function Card(props) {
  const navigate = useNavigate();
  const {character, onClose, addFavorite, removeFavorite, favorites} = props;
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav,setIsFav] = useState(false);


  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, [])


  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === character.id) {
          setIsFav(true);
       }
    });
 }, [favorites]);


    function navigateHandler () {
      navigate (`/Detail/${character.id}`);
    };

    function favoriteHandler (data) {
      if(isFav){
        removeFavorite(data)
        setIsFav(false)
      } else {
        addFavorite(data)  
        setIsFav(true)
      } 
    };
  
    return (
      <div className="card-container">
        <div className="image-container">
          <img
            className="character-image"
            onClick={navigateHandler}
            src={character.image}
            alt={character.name}
          />
          <h2 className="name">{character.name}</h2>
          { isFav ? (
            <button onClick={() => favoriteHandler(character.id) }>❤️</button>
            ) : (
            <button onClick={() => favoriteHandler(character) }>🤍</button>
            )}
          
          {closeBtn ? (
          <button className="close-button" onClick={() => onClose(character.id)}>
            X
          </button>
          ) : null }
        </div>
        <div className="atributes">
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
        </div>
      </div>
    );
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      addFavorite:(character) => dispatch(addFavorite(character)),
      removeFavorite:(id) => dispatch(removeFavorite(id))
  }
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);