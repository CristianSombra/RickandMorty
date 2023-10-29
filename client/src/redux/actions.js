import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTER_ID = "GET_CHARACTER_ID";
export const ERROR = "ERROR";
// export const ADD_FAVORITE = "ADD_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const getCharacters = () => {
    return async function (dispatch) {
        let errorMessage = '';

        try {
            const apiData = await axios.get('http://localhost:3001/');
            const characters = apiData.data
            dispatch({type: GET_CHARACTERS, payload: characters})
        } catch (error) {
            errorMessage = "Error al buscar el personaje";
            dispatch({type: ERROR, payload:errorMessage})
        }
        return errorMessage;
    };
};

export const getCharacterById = (id) => {
    return async function (dispatch) {
        let errorMessage = '';
        try {
            const apiDataId = await axios.get(`http://localhost:3001/character/${id}`)
            const character = apiDataId.data
            dispatch({type: GET_CHARACTER_ID, payload: character})
        } catch (error) {
            errorMessage = "Error al buscar al personaje"
            dispatch({type: ERROR, payload: errorMessage})
        }
        return errorMessage;
    };
};


// export function addFavorite (character) {
//     return{
//         type:"ADD_FAVORITE",
//         payload: character
//     }
// };

// export function removeFavorite (id) {
//     return{
//         type:"REMOVE_FAVORITE",
//         payload: id
//     }
// };