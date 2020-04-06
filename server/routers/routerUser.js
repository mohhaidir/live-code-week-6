const express = require('express')
const router = express.Router()
const ControllerUsers = require('../controllers/controllerUser')
// const Authentication = require('../middlewares/authentication')
// const Authorization = require('../middlewares/authorization')
// const errorHandler = require('../middlewares/errorHandler')

router.post('/register', ControllerUsers.register)
router.post('/login', ControllerUsers.login)

module.exports = router