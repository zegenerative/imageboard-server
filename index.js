// link to heroku app:
// https://polar-woodland-08086.herokuapp.com/

const express = require('express')
const app = express()
const cors = require('cors')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const db = require('./db')
const imageRouter = require('./image/router')
const auth = require('./server/auth/server/auth/router')
const userRouter = require('./user/router')

const port = process.env.PORT || 4000
listenOnPort = () => {
    console.log(`Listenin sdfsdfg on port: ${port}`)
}

app.get("/hi", (req, res) => res.send("hello"));

app.use(corsMiddleware)
app.use(jsonParser)
app.use(imageRouter)
app.use(auth)
app.use(userRouter)

app.listen(port, listenOnPort)
