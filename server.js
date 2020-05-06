require('dotenv').config()
const express = require('express')

const server = express()

server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${ process.env.PORT }`)
})
