const Sequelize = require('sequelize')
const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:zeger@localhost:5432/postgres'
const db = new Sequelize(databaseURL)

db
    .sync()
    .then(result => {
        console.log('done')
    })
    .catch(err => console.log(err))

module.exports = db