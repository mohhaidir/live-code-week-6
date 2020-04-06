const express = require('express')
const router = express.Router()
const ControllerFoods = require('../controllers/controllerFood')
const Authentication = require('../middlewares/authentication')
const Authorization = require('../middlewares/authorization')
const errorHandler = require('../middlewares/errorHandler')

// router.get('/', ControllerFoods.GetFoods)
// router.post('/', ControllerFoods.AddFoods)

module.exports = router