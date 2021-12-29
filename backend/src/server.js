const express = require('express');
const PORT = 3333;

class App {
    constructor() {
        this.express = express();
        this.cors();
        this.middlewares();
        this.routes();

        this.express.listen(PORT, () => {
            console.log("Api running on port " + PORT);
        })
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
        this.express.use(require("./routes"));
    }
}

module.exports = new App;