const express = require('express')
const app = express()

const data = require('./data.json')

const port = 3000

app.get('/', (req, res, next) => {
    res.send({ message: "try again" })
    next()
})

app.get('/cakes', (req, res, next) => {
    res.send({ cakes: data })
})

app.get('/cakes/:id', (req, res, next) => {
    let id = req.params.id
    var matchingCake = data.filter(cake => {
        return cake.id == id
    })
    if(!matchingCake.length){
        res.status(404).send({ message: "hey this doesn't exist" })
    } else {
        res.send({ cake: matchingCake[0] })
    }
})

app.listen(port)