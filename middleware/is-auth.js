const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization')
	if (!authHeader) {
		req.isAuth = false
		return next()
	}
	const apiToken = authHeader
	if (!apiToken || apiToken === '') {
		req.isAuth = false
		return next()
	}
	let decodedToken
	try {
		decodedToken = jwt.verify(apiToken, 'camelrace')
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
