const jwt = require('jsonwebtoken')

const authentication = (req, res, next) => {
  let { token } = req.headers
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userData = decoded
  } catch (err) {
    next({ status: 400, msg: 'Login Required!' })
  }
}

module.exports = authentication