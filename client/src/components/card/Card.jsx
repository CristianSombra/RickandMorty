import React from "react";
import { Link } from "react-router-dom";
import { BiFileFind, BiHeart } from 'react-icons/bi';
import './Card.css';


const Card = ({ id, image, name, species }) => {

    return (
    <div className="container">
      <div className="row">
          <div class="card">
              <img src={image} class="card-img-top" alt={name}></img>
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h5>Especie: {species}</h5>
              </div>
       
          <div className="card-footer text-muted d-flex justify-content-between">
              <Link to={`/detail/${id}`}>
                 <BiFileFind className="file"/>
              </Link>
              <Link to="/Favorites">
                  <BiHeart className="file"/>
              </Link>
              </div>     
            </div>
          </div>
      </div>
    );
  }

  export default Card;