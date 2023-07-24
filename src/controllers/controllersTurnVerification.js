const model = require('../models/userTurnos')

const getTurn = async (dia, hora) => {

    const response = await model.findOne({
        dia,
        hora
    })

    return response
} 

module.exports = { getTurn }