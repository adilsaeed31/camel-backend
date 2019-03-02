const Race = require('../../models/race')

const { transformRace } = require('./merge')

module.exports = {
	races: async () => {
		try {
			const races = await Race.find()
			console.log(races, 'Races records')
			return races.map(race => {
				return transformRace(race)
			})
			// return races
		} catch (err) {
			throw err
		}
	}
}
