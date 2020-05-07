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

module.exports = {
  add: add,
  findBy: findBy,
}
