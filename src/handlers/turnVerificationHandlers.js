const { getTurn } = require('../controllers/controllersTurnVerification')


const turnVerificationHandles = async (req, res) => {

    const {dia, hora} = req.body

    try {
        
        const response = await getTurn(dia, hora)

        if (response) {
            return res.status(200).json({message: "Turno existente"})
        }

        if (!response) {
            return res.status(200).json({message: "El turno no existe"})
        }

    } catch (error) {
        return res.status(500).json({message: "Error del servidor"})
    }
}


module.exports = { turnVerificationHandles }