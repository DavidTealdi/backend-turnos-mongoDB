const horasTurnos = require('express').Router();

// Importamos los Handlers
const { postHorasViernes, postHorasSabado, getHorasViernes, getHorasSabado, deleteHorasViernes, deleteHorasSabado } = require('../handlers/horasTurnosHandlers')


// Ruta
horasTurnos
    .post('/viernes', postHorasViernes)
    .post('/sabado', postHorasSabado)
    .get('/viernes', getHorasViernes)
    .get('/sabado', getHorasSabado)
    .delete('/viernes/:id', deleteHorasViernes)
    .delete('/sabado/:id', deleteHorasSabado)

   
module.exports = horasTurnos