const express = require('express')
const app = express()
const port = 3000

const

const router = require('./routers')


// app.use(router)

app.listen(port, () => {
  console.log(`SERVER running on port ${port}`)
})