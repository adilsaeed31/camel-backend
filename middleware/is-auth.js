const jwt = require("jsonwebtoken")
const { token } = require("../util/index")

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    req.isAuth = false
    return next()
  }
  const apiToken = token
  if (!apiToken || apiToken === "") {
    req.isAuth = false
    return next()
  }
  let decodedToken
  try {
    decodedToken = jwt.verify(token, "camelrace")
    console.log(decodedToken, "decodedToken")
  } catch (err) {
    req.isAuth = false
    return next()
  }
  if (!decodedToken) {
    req.isAuth = false
    return next()
  }
  req.isAuth = true
  next()
}
