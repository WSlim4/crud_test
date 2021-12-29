const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    cpf: String,
    nome: String,
    email: String,
    telefone: String,
    endereco: {
        rua: String,
        numero: Number,
        bairro: String,
        cidade: String
    }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;