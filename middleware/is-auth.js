const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    req.isAuth = false
    return next()
  }
  // const token = authHeader.split(" ")[1]
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FtZWxyYWNlIn0.KmX0KBu3z2_EIBF1Fyd-p9zm1r3J5ixfD8R_5sSHfrs"
  if (!token || token === "") {
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
