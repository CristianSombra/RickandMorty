import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import NavBar from './components/navBar/navBar.jsx';
import Home from './views/Home/Home.jsx'
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Favorites from './views/Favorites/Favorites.jsx';
import PageNotFound from './views/Pagenotfound/Pagenotfound';
import LandingPage from "./views/Landing/Landing.jsx";
import Logo from "./assets/logo.png";

import './App.css';

function App() {
  const location = useLocation()
  const [input, setInput] = useState ("");
  const [characters, setCharacters] = useState ([]);

// LOGIN
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const username = "ejemplo@gmail.com";
  // const password = "1password";

  // function loginHandler(userData) {
  //   if (userData.password === password && userData.email === username) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  function loginHandler(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    });
  }

 useEffect(() => {
   !access && navigate("/");
 }, [access]);


// LOGOUT
  function logoutHandler() {
    setAccess(false);
    navigate("/");
  }


  function changeHandler(e) {
    e.preventDefault();
    let inputValue = e.target.value;

    setInput(inputValue);
  }
  
  // async function searchHandler(e) {
  //   e.preventDefault();

  // let found =  characters.find((character) => character.id === Number(input));

  // if (!found){
  //     // fetch(`https://rickandmortyapi.com/api/character/${input}`) >> con este si funciona
  //     let response = await fetch(`http://localhost:3001/rickandmorty/characters/${input}`)
  //       try {
  //         let {data:char} = response;
  //            if (char.name) setCharacters((oldChars) => [...oldChars, char]);
  //            else window.alert('No hay personajes con ese ID');
  //       } catch (error) {
  //         alert(error); 
  //       }
  //     }
  // }

  async function searchHandler(e) {
    e.preventDefault();
  
    let found = characters.find((character) => character.id === Number(input));
  
    if (!found) {
      let response = await fetch(`http://localhost:3001/rickandmorty/characters/${input}`);
      try {
        let char = await response.json();
        if (char && char.name) {
          setCharacters((oldChars) => [...oldChars, char]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      } catch (error) {
        alert(error); 
      }
    }
  }
  

   function closeHandler (id) {
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter((character) => character.id !== found.id);
    setCharacters(deleted);
   }

  function randomHandler () {
    let haveIt = [];

    let random = (Math.random() * 826).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      // fetch(`https://rickandmortyapi.com/api/character/${random}`) >> con este si funciona
      fetch(`http://localhost:3001/rickandmorty/characters/${random}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('Ya agregaste a todos los personajes');
            }
         });
        }
        else {
          alert("El personaje ya fué agregado")
        }
    };


    return (
      <div className='App' >
        <img className='home-title' src={Logo} alt='title'/>


    {location.pathname !== "/" && (
        <NavBar
          onSearch={searchHandler}
          onChange={changeHandler}
          random={randomHandler}
          logout={logoutHandler}
        />
      )}


  <Routes>
  <Route exact path="/" element={<LandingPage login={loginHandler}/>} />
      <Route path="/Home" element={<Home characters={characters} onClose={closeHandler} />} />/
      <Route path="/Detail/:id" element={<Detail />} />/
      <Route path="/About" element={<About />} />/
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="*" element={<PageNotFound />} />
  </Routes>
</div>
    );
  };
  
export default App;
