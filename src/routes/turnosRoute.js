const turnosRoute = require('express').Router();


// Importamos los Handlers
const {
    
    getTurnosHandlerByViernes, 
    getTurnosHandlerBySabado, 
    postTurnoHandlers, 
    deleteTurnoHandlers

} = require('../handlers/turnoHandlers')


// Rutas
turnosRoute
    .get('/viernes', getTurnosHandlerByViernes)
    .get('/sabado', getTurnosHandlerBySabado)
    .post('/', postTurnoHandlers)
    .delete('/:id', deleteTurnoHandlers)

module.exports = turnosRoute