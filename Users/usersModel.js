const db = require('../database/config')

async function add ( user ) {
  return db('users').insert(user)
}

async function findBy ( username ) {
  const [ user ] = await db('users')
      .where('username', username)
  try {
    return user
  } catch (err) {
    console.log(err)
  }
}

async function getAllUsers () {
  const users = await db('users')
      .select('id', 'username')
  try {
    return users
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  add: add,
  findBy: findBy,
  getAllUsers
}
