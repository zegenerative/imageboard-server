const { Router } = require('express')
const router = new Router()
const Image = require('../image/model')
const auth = require('../server/auth/server/auth/middleware')

router.get('/image', (req, res, next) => {
    Image.findAll()
    .then(images => {
        res.send(images)
    })
    .catch(next)
})

router.get('/image/:id', (req, res, next) => {
    Image.findByPk(req.params.id)
    .then(image => {
        res.send(image)
    })
    .catch(next)
})

router.post('/image', auth, (req, res, next) => {
    Image.create(req.body)
    .then(result => { 
        res.send(result) 
    })
    .catch(next)
})

module.exports = router