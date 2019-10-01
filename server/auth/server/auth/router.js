const { Router } = require('express')
const { toJWT, toData } = require('./jwt')
const auth = require('./middleware')
const User = require('../../../../user/model')
const bcrypt = require('bcrypt')

const router = new Router()

router.post('/login', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    if(!email || !password) {
        res.status(400).send({
            message: 'Please supply a valid email and password'
        })
    } else {
    User
    .findOne({
        where: {
            email: req.body.email
        }
    })
    .then(entity => {
    if (!entity) {
        res.status(400).send({
        message: 'User with that email does not exist'
        })
    } else if (bcrypt.compareSync(req.body.password, entity.password)) { // 2. use bcrypt.compareSync to check the password against the stored hash
        // 3. if the password is correct, return a JWT with the userId of the user (user.id)
        res.send({
        jwt: toJWT({ userId: entity.id })
        })
    } else {
        res.status(400).send({
        message: 'Password was incorrect'
        })
    }
    })
    .catch(next)
    }   
})

router.get('/secret-endpoint', auth, (req, res) => {
    res.send({
      message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
    })
})

module.exports = router

