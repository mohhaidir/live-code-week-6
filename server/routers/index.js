const express = require('express')
const router = express.Router()
const routerUser = require('./routerUser')
const routerFood = require('./routerFood')

router.use('/users', routerUser)
router.use('/foods', routerFood)

module.exports = router