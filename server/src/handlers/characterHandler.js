const { getAllChar, getCharById } = require('../controllers/characterController');


const getAllCharHandler = async (req, res) => {
    try {
        const allCharacters = await getAllChar();
        res.status(200).send(allCharacters);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getCharByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const character = await getCharById(id)
        if(!character) {
            return res.status(404).json({error:"Personaje no encontrado"})
        } else {
            res.status(200).json(character);
        }
    } catch (error) {
        res.status(500).json({error:"Error al obtener el personaje por ID desde la base de datos"})
    };
};


module.exports = {
    getAllCharHandler,
    getCharByIdHandler
}