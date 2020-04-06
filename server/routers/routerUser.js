const express = require('express')
const router = express.Router()
const ControllerUsers = require('../controllers/controllerUser')
const errorHandler = require('../middlewares/errorHandler')

router.post('/register', ControllerUsers.register)
router.post('/login', ControllerUsers.login)

router.use(errorHandler)
module.exports = router