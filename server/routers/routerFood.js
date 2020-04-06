const express = require('express')
const router = express.Router()
const ControllerFoods = require('../controllers/controllerFood')

router.get('/', ControllerFoods)

module.exports = router