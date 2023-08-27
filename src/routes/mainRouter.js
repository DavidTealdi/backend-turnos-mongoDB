const { Router } = require('express');

// Importamos las rutas
const routeTurnos = require("./turnosRoute")
const loginRoute = require("./loginRoute")
const getRouteHora = require('./getHoraRoute')
const turnoDeleteRoute = require('./turnoDeleteRoute')
const turnVerification = require('./turnVerificationRoute')
const horasTurnos = require('./horasTurnosRoute')

const mainRouter = Router();


// Ruta para los turnos
mainRouter.use("/turno", routeTurnos)

// Ruta para el login
mainRouter.use("/autho", loginRoute)

// Ruta para traer los turnos de la DB
mainRouter.use("/getturnos", getRouteHora)

// Ruta para eliminar turnos
mainRouter.use('/turnodelete', turnoDeleteRoute)

// Ruta para verificar que el turno no exista
mainRouter.use('/turnverification', turnVerification)

// Ruta para que mateo pueda cambiar los horarios
mainRouter.use('/horas', horasTurnos)

module.exports = mainRouter