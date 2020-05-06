require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const server = express()

server.use(express.json())
server.use(helmet())

server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${ process.env.PORT }`)
})
