const { Character } = require ("../db");
const axios = require("axios");


const formattedCharacterData = (data) => {
    return {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: JSON.stringify(data.origin.name),
        image: data.image,
        status: data.status,
    };
};


const getAllChar = async () => {
    const characters = await Character.findAll();
    if (characters.length > 0) {
        return characters;
    }
    else {
        const apiUrl = "https://rickandmortyapi.com/api/character";
        const response = await axios.get(apiUrl);
        const formattedData = response.data.results.map(formattedCharacterData);
        await Character.bulkCreate(formattedData)

        return formattedData;
    };
};
 
const getCharById = async (id) => {
    const character = await Character.findOne({
        where: { id }
    });
    return character;
    }


module.exports = {
    getAllChar,
    getCharById
};