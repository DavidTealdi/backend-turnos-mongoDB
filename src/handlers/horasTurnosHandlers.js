const {postHoraViernes, postHoraSabado, getHoraViernes, getHoraSabado, deleteHoraViernes, deleteHoraSabado} = require('../controllers/controllersHorasTurnos')


// Post viernes
const postHorasViernes = async (req, res) => {

    const {hora} = req.body

    try {
        
        const response = await postHoraViernes(hora)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send(error.message)
    }
}

// Post sabado
const postHorasSabado = async (req, res) => {

    const {hora} = req.body

    try {

        const response = await postHoraSabado(hora)
        
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send(error.message)
    }
}

// Get viernes
const getHorasViernes = async (req, res) => {

    try {

        const response = await getHoraViernes()
        
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send(error.message)
    }
}

// Get sabado
const getHorasSabado = async (req, res) => {

    try {
        
        const response = await getHoraSabado()

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send(error.message)
    }
}

// delete viernes
const deleteHorasViernes = async (req, res) => {

    const {id} = req.params

    try {
        
        const response = await deleteHoraViernes(id)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send(error.message);
    }
}

// delete viernes
const deleteHorasSabado = async (req, res) => {

    const {id} = req.params

    try {
        
        const response = await deleteHoraSabado(id)

        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).send(error.message);
    }
}


module.exports = {
    postHorasViernes,
    postHorasSabado,
    getHorasViernes,
    getHorasSabado,
    deleteHorasViernes,
    deleteHorasSabado
};