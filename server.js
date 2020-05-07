require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const server = express()

const authRouter = require('./auth/authRouter')
const sessionConfig = {
  name: 'lightsaber',
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
}

server.use(express.json())
server.use(helmet())
server.use(session(sessionConfig))
server.use('/api', authRouter)
server.get('/api', (req, res, next) => {
  res.json({ message: 'welcome' })
})

server.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`)
})
