const { Users } = require('../models')

class ControllerUsers {
  static register(req, res, next) {
    const { email, password } = req.body
    Users.create({ email, password })
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        if (err.errors) {
          next({ status: 400, msg: err.errors })
        } else {
          next({ status: 500, msg: 'Internal Server Error!' })
        }
        console.log(err.errors)
      })
  }

  static login(req, res, next) {
    let { email, password } = req.body
    let userFound = null
    Users.findOne({ where: { email } })
      .then(data => {
        if (data) {
          userFound = data
          return
        }
      })
  }
}

module.exports = ControllerUsers