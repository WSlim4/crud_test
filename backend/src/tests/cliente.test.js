const mockingoose = require('mockingoose');
const Cliente = require('../models/Cliente');

describe('cliente findAll', () => {
    const _doc = [
        {
            "endereco": {
                "rua": "Rua da vida",
                "bairro": "Copacabana",
                "cidade": "Rio de Janeiro",
                "numero": 16
            },
            "_id": "61cccb35f45802b473a60ce8",
            "cpf": "55555555555",
            "nome": "Wesley",
            "email": "wesleylima@gmail.com",
            "celular": "21999999999",
            "dataCriacao": "2021-12-29T20:55:17.270Z",
            "__v": 0
        },
        {
            endereco: {
                rua: "Rua da vida",
                bairro: "Copacabana",
                cidade: "Rio de Janeiro",
                numero: 16
            },
            _id: "61cccbc911c822b6acb6fa7e",
            cpf: "55555555555",
            nome: "Wesley",
            email: "wesleylima@gmail.com",
            celular: "21999999999",
            dataCriacao: "2021-12-29T20:57:45.625Z",
            __v: 0
        }
    ];

    it('retornar todos os clientes', () => {
        mockingoose(Cliente).toReturn(_doc, 'find');

        return Cliente.find({}).then(doc => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        })
    });
})