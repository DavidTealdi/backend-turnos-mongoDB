const turnVerification = require('express').Router();


const { turnVerificationHandles } = require('../handlers/turnVerificationHandlers')


turnVerification
    .post('/', turnVerificationHandles)

module.exports = turnVerification