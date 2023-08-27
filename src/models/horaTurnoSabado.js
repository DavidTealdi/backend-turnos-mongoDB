const {Schema, model} = require('mongoose')

const horaTurnoSabadoSchema = new Schema({
    hora: {
        type: String,
        unique: false
    }
}, {
    versionKey: false,
    timestamps: false
})

module.exports = model('horaTurnoSabado', horaTurnoSabadoSchema)