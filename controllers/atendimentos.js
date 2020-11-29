const Produto = require('../models/produtos');

module.exports = app => {
    app.get('/atendimentos', (req,res) => res.send('Você está na rota de atendimentos e está realizando um GET')); 

    app.post('/atendimentos', (req,res) => {

        const produto = req.body;

        Produto.adiciona(produto);

        res.send('Você está na rota de atendimentos e está realizando um POST')
        
    });
}