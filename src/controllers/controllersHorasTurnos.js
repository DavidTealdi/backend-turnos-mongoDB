const modelViernes = require('../models/horasTurnoViernes')
const modelSabado = require('../models/horaTurnoSabado')

const postHoraViernes = async (hora) => {

    const response = await modelViernes.create({hora})

    return response
};

const postHoraSabado = async (hora) => {

    const response = await modelSabado.create({hora})

    return response
};

const getHoraViernes = async () => {
    
    const response = await modelViernes.find().sort({hora: 1}); // Ordena los horarios de forma ascendente

    return response
}

const getHoraSabado = async () => {
    
    const response = await modelSabado.find().sort({hora: 1}); // Ordena los horarios de forma ascendente

    return response
}

const deleteHoraViernes = async (id) => {
    
    const result = await modelViernes.deleteOne({
       
        _id: id
    
    })

    return {deleted: true}
}

const deleteHoraSabado = async (id) => {
    
    const result = await modelSabado.deleteOne({
       
        _id: id
    
    })

    return {deleted: true}
}

module.exports = {
    postHoraViernes,
    postHoraSabado,
    getHoraViernes,
    getHoraSabado,
    deleteHoraViernes,
    deleteHoraSabado
}