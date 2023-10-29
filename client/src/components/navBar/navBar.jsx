import React from "react"
import logoNav from '../../assets/logoNav.png';
import { Link } from "react-router-dom";
import './navBar.css';
// import {Link} from 'react-router-dom';



export default function NavBar () {
  return (
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: 'black'}}>
            <div class="container">
            <a class="navbar-brand" href="#">
              <Link to="/Home">
                <img src={logoNav} class="img-fluid" width={180} alt="logoNav"/>
              </Link>
            </a>
            <button class="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'green'}}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/Favorites">
                    <a class="nav-link active" aria-current="page" href="#">Favoritos</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/About">
                    <a class="nav-link" href="#">Proyecto</a>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contactos
                  </a>
                  <ul class="dropdown-menu" style={{ backgroundColor: 'black'}}>
                    <li><a class="dropdown-item" href="#">Mi Linkedin</a></li>
                    <li><a class="dropdown-item" href="#">Mi Github</a></li>
                    <li><a class="dropdown-item" href="#">Mi Portafolio</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            </div>
        </nav>
)};

