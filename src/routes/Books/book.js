const express = require('express')
const booController = require('../../controllers/bookController')
const routes = express.Router()


routes.get('/',booController.getbooks)

routes.post('/register',booController.createBook)

module.exports =routes