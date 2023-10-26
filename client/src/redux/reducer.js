import {ERROR, GET_CHARACTERS } from "./actions";

const initialState = {
    characters: []};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload, 
            }
        // case ADD_FAVORITE:
        // return {
        //     ...state, 
        //     favorites:[...state.favorites, action.payload]
        // }

        // case REMOVE_FAVORITE:
        // return {
        //    ...state, 
        //    favorites: state.favorites.filter(
        //         (character) => character.id !== action.payload)
        // };
    
        default:
            return state;
    }

}


export default rootReducer;