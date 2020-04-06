const { Users } = require('../models')
const comparePassword = require('../helpers/comparePassword')
const generateToken = require('../helpers/generateToken')
class ControllerUsers {
  static register(req, res, next) {
    const { email, password } = req.body
    Users.create({ email, password })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        console.log(err.errors)
        if (err.errors) {
          next({ status: 400, msg: err.errors })
        } else {
          next({ status: 500, msg: 'Internal Server Error!' })
        }
      })
  }

  static login(req, res, next) {
    let { email, password } = req.body
    console.log(req.body)
    let userFound = null
    Users.findOne({ where: { email } })
      .then(data => {
        if (data) {
          console.log(data)
          userFound = data
          return comparePassword(password, data.password)
        } else {
          next({ status: 400, msg: 'Either Email or Password invalid!' })
        }
      })
      .then(result => {
        if (result) {
          let token = generateToken(userFound)
          res.status(200).json({ access_token: token })
          console.log('LOGIN SUCCESS ====================>>>>>>>>>')
        } else {
          next({ status: 400, msg: 'Either Email or Password invalid!' })
        }
      })
      .catch(err => {
        next({ status: 500, msg: 'Internal Server Error' })
      })
  }
}

module.exports = ControllerUsers