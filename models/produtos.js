const conexao = require('../infraestrutura/conexao');

class Produto {
    adiciona(atendimento) {
        const sql  = 'INSERT INTO Produtos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if(erro)
                console.log(erro)
            else
                console.log(resultados)
        })
    }
}

module.exports = new Produto