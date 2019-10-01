const { Router } = require('express')
const router  = new Router()
const User = require('./model')
const bcrypt = require('bcrypt')

//create a user with encrypted password
router.post('/user', (req, res, next) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    User.create(user)
    .then(user => {
        res.send(user)
    })
    .catch(next)
})

module.exports = router