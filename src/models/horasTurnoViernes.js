const {Schema, model} = require('mongoose')

const horaTurnoViernesSchema = new Schema({
    hora: {
        type: String,
        unique: false
    }
}, {
    versionKey: false,
    timestamps: false
})

module.exports = model('horaTurnoViernes', horaTurnoViernesSchema)