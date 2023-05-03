const express = require('express')
const { createquiz } = require('../controller/quizemodel')



const routes = express.Router()


routes.post('/create', createquiz)


module.exports = routes