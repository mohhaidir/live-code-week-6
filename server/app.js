require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const router = require('./routers')

app.use(router)

app.listen(port, () => {
  console.log(`SERVER running on port ${port}!`)
})