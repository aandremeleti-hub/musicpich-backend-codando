const express = require('express')
const cors = require('cors')
const router = require('./routes/router')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

const port = 8081

app.listen(port, () => {
    console.log(`Servidort rodando em ${port}`)
})