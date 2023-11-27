const model = require('../models/userTurnos')


// Trae todos los turnos dias viernes. Para mostrarlos en la tabla viernes
const getUsersByDayViernes = async () => {
    
    const response = await model.find({
    
        dia: 'Jueves' // Aqui
    
    }).sort({hora: 1}); // Ordena los horarios de forma ascendente

    return response
};

// Trae todos los turnos dias sabados. Para mostrarlos en la tabla sabado
const getUsersByDaySabado = async () => {
    
    const response = await model.find({
       
        dia: 'Viernes' // Aqui
    
    }).sort({hora: 1}); // Ordena los horarios de forma ascendente

    return response
};

// Crea un turno nuevo
const postUser = async (name, lastName, number, dia, hora) => {
    
    // si numero no tiene valor ponemos uno por defecto
    if (number === '') number = "Sin numero"

    const user = await model.create({ name, lastName, number, dia, hora })
    
    return user
}

// Elimina un turno por el id
const deleteUser = async (id) => {
    
    const result = await model.deleteOne({
       
        _id: id
    
    })

    return {deleted: true}
}

module.exports = {
    getUsersByDayViernes,
    getUsersByDaySabado,
    postUser,
    deleteUser
};