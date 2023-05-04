const express = require('express')
const { createquiz } = require('../controller/quizeCtrl')



const routes = express.Router()


routes.post('/create', createquiz)


module.exports = routes