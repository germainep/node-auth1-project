const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Users = require('../Users/usersModel')
const authorized = require('../restricted-middleware')


router.post('/register', async ( req, res, next ) => {
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 8)

  user.password = hash

  await Users.add(user)
  try {
    res.json(`user saved`)
  } catch (err) {
    next(err)
  }
})

router.post('/login', async ( req, res, next ) => {
  const { username, password } = req.body

  const user = await Users.findBy(username)

  try {
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user
      res.json({ message: `Welcome ${ user.username }` })
    }
    else {
      res.status(401).json('Invalid Credentials')
    }
  } catch (err) {
    next(err)
  }
})

router.get('/users', authorized, async ( req, res, next ) => {
  const users = await Users.getAllUsers()
  try {
    res.json(users)
  } catch (err) {
    next(err)
  }

})
module.exports = router
