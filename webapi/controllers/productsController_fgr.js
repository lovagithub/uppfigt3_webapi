let products = require('../data/database')
const express = require('express')
const controller = express.Router()


controller.param("tag", (req, res, next, articleNumber) => {
    req.products = products.find(x => x.articleNumber == articleNumber)  
    next()
})
controller.param("tag", (req, res, next, tag) => {
    req.products = products.find(x => x.tag == tag)
    next()
})


controller.route('/details/:artickeNumber').get((req, res) => {
    if(req.product != undefined)
    res.status(200).json(req.product)
    else 
    res.status(404).json()
    })

controller.route('/:tag').get((req, res) => {
    if(req.products != undefined)
    res.status(200).json(req.products)
    else 
    res.status(404).json()
    })
controller.route('/:tag/:take').get((req, res) => {
    let list = []

    for (let i = 0; i < Number(req.params.take); i++)
    list.push = req.products[i]
    res.status(200).json(req.list)
    })

controller.route('/').get((req, res) => {
    res.status(200).json(products)
})

module.exports = controller
