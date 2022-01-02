const express = require('express');
const mongoose = require('mongoose');
const PORT = 3333;

class App {
    constructor() {
        this.express = express();
        this.database();
        this.cors();
        this.middlewares();
        this.routes();

        this.express.listen(process.env.PORT || PORT, () => {
            console.log("Api rodando na porta " + process.env.PORT);
        })
    }

    async database() {
        try {
            await mongoose.connect('mongodb+srv://mongoUser:mongo123@cluster0.0sx4k.mongodb.net/Kittens?retryWrites=true&w=majority');
            console.log("Banco de dados conectado");
        } catch (error) {
            console.log("Erro ao conectar ao banco de dados", error);
        }

    }

    cors() {
        this.express.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use('/clientes', require("./Routes"));
    }
}

module.exports = new App;