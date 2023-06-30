import Cards from '../../components/cards/Cards.jsx'

import "./Home.css";

function Home ({characters, onClose}) {

    return (
        <div className='home-container' >
            <Cards characters={characters} onClose={onClose} />
        </div>
      );
    }
    


export default Home;