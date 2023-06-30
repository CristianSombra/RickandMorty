import {ADD_FAVORITE, REMOVE_FAVORITE} from "./actions";



const initialState = {favorites:[], characters: []};

function rootReducer (state = initialState, action) {

    switch (action.type) {
        case ADD_FAVORITE:
        return {
            ...state, 
            favorites:[...state.favorites, action.payload]
        }

        case REMOVE_FAVORITE:
        return {
           ...state, 
           favorites: state.favorites.filter(
                (character) => character.id !== action.payload)
        };
    
        default:
            return state;
    }

}


export default rootReducer;