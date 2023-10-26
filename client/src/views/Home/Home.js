import CardsContainer from '../../components/cardsContainer/cardsContainer';

import "./Home.css";

function Home () {

    return (
        <div className='home-container'>
            <h1>Personajes:</h1>
            <div className='container-cardscontainer'>
            <CardsContainer/>
            </div>
            </div>
      );
    }
    


export default Home;