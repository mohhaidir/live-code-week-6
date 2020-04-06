const jwt = require('jsonwebtoken')

const generateToken = (user) => {
  var token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET)
  return token
}

module.exports = generateToken