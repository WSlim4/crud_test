const { body } = require('express-validator');

const validations = [
    body('nome').isString(),
    body('cpf').isString().isLength({ min: 11, max: 11 }),
    body('email').isEmail(),
    body('celular').isLength({ min: 11, max: 11 }),
    body('endereco.numero').isNumeric()
]

module.exports = validations;