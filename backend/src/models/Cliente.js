const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');

const ClienteSchema = new Schema({
    cpf: String,
    nome: String,
    email: String,
    celular: String,
    endereco: {
        rua: String,
        bairro: String,
        cidade: String,
        numero: Number
    },
    dataCriacao: { type: Date, default: Date.now },
});

ClienteSchema.plugin(mongoosePaginate);

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;