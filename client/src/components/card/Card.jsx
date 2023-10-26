import React from "react";
import { Link } from "react-router-dom";


const Card = ({ id, image, name, species, gender }) => {
  const cardStyle = {
    width: '18rem'
  };
  
    return (
      <div class="card" style={cardStyle}>
        <img src={image} class="card-img-top" alt={name}></img>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <Link to={`/detail/${id}`} class="btn btn-primary">Aquí iría a la descripción del personaje</Link>
        </div>
      </div>

    );
  }

  export default Card;