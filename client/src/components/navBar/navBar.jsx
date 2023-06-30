import {Link} from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar.jsx'


import "./navBar.css"

export default function NavBar ({onSearch, onChange, random, logout}) {
    return (
        <div className='nav-container'>
        <div className="navlinks">
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/favorites">
          Favorites
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <p className="link" onClick={logout}>
          logout
        </p>
         </div>
            <SearchBar onSearch={onSearch} onChange={onChange}/>
            <button className='random' onClick={random}>Add Random</button>
        </div>
    );
};

