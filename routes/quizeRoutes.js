const express = require('express')
const { createquiz, gerquiz } = require('../controller/quizeCtrl')



const routes = express.Router()


routes.post('/create', createquiz)
routes.get('/get', gerquiz)



module.exports = routes