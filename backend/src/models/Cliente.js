const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    cpf: String,
    nome: String,
    email: String,
    telefone: String,
    endereco: {
        rua: String,
        bairro: String,
        cidade: String,
        uf: String,
        numero: Number
    },
    dataCriacao: { type: Date, default: Date.now },
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;