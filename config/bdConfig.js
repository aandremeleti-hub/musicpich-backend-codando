const sequelize = require('sequelize')

const conexao = new sequelize ('musicpich-backend-codando-db', 'root','',{
    host:'localhost',
    dialect: 'mysql'
} )

async function testarConexao(){
    try{
        await conexao.authenticate()
            console.log('Conexão bem sucedida!')
    }
    catch (err) {
        console.log('Erro de conexão: err.message')
    }
}

testarConexao()

module.exports = conexao
