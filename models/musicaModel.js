const {DataTypes} = require('sequelize')
const conexao = require('../config/dbConfig')

const Musicas = conexao.define('Musicas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING
    },
    cantor: {
        type: DataTypes.STRING 
    },
    link: {
        type: DataTypes.STRING
    }
})

Musicas.sync()

module.exports = Musicas