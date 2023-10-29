import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Landing, Home, Favorites, About, Detail } from './views/index';
import Navbar from './components/navBar/navBar'
import './App.css';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    return (
      <div className='container'>
            {location.pathname !== "/" && <Navbar />}
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/About" element={<About />} />
                <Route path="/Detail/:id" element={<Detail />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
          </div>
    );
  };
  
export default App;
