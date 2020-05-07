require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const server = express()
const usersRouter = require('./Users/usersRouter')
const authRouter = require('./auth/authRouter')

server.use(express.json())
server.use(helmet())
server.use('/api', authRouter)
server.get('/api', (req, res, next) => {
  res.json({ message: 'welcome' })
})

server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`)
})
