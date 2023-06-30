// const axios = require("axios");


// // function getCharById (req, res) {
// const getCharById = async (req, res) => {
//         let {id} = req.params;
//         let URL = `https://rickandmortyapi.com/api/character/${id}`;
//     try {
//         let response = await axios.get(URL);
//             if (response.data.name) {
//                 let {id, name, gender, species, origin, image,  status} = response.data;
//                 let character = {id, name, gender, species, origin, image,  status}
//             res.status(200).json(character);
//     } else res.status(404).send("No existe el personaje");        
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }

// };

// module.exports = getCharById;


const axios = require("axios");

const getCharById = async (req, res) => {
    let { id } = req.params;
    let URL = `https://rickandmortyapi.com/api/character/${id}`;

    try {
        let response = await axios.get(URL);
        if (response.data.name) {
            let { id, name, gender, species, origin, image, status } = response.data;
            let character = { id, name, gender, species, origin, image, status };
            res.status(200).json(character);
        } else {
            res.status(404).send("No existe el personaje");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getCharById;