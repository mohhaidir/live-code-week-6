const { Foods } = require('../models')

const authorization = (req, res, next) => {
  let UserId = Number(req.userData.id)
  let id = Number(req.params.id)
  Foods.findByPk(id)
    .then(food => {
      if (food.UserId == UserId) {
        next()
      } else {
        next({ status: 400, msg: 'Not Authorized!' })
      }
    })
    .catch(err => {
      next({ status: 400, msg: 'Server Error!' })
    })
}

module.exports = authorization