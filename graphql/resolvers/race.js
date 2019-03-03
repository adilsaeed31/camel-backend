const Race = require('../../models/Race')

const { transformRace } = require('./merge')

module.exports = {
	races: async (args, req) => {
		if (!req.isAuth) {
			throw new Error('Unauthenticated!')
		}
		try {
			const races = await Race.find()
			return races.map(race => {
				return transformRace(race)
			})
			// return races
		} catch (err) {
			throw err
		}
	}
}
