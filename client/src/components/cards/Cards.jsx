import Card from '../card/Card.jsx';

import style from './Cards.module.css';


export default function Cards(props) {
   const { characters, onClose } = props;


    return (
    <div className={style.cardList}>
        {characters?.map((character) => (
            <Card key={character.id} character={character} onClose={onClose} />
        ))}

    </div>
    );
}
