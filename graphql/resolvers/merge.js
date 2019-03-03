const DataLoader = require('dataloader')

const Race = require('../../models/Race')

const raceLoader = new DataLoader(raceIds => {
	return races(raceIds)
})

const races = async raceIds => {
	try {
		const races = await Race.find({ _id: { $in: raceIds } })
		races.sort((a, b) => {
			return (
				raceIds.indexOf(a._id.toString()) - raceIds.indexOf(b._id.toString())
			)
		})
		return races.map(race => {
			return transformRace(race)
		})
	} catch (err) {
		throw err
	}
}

const singleRace = async raceId => {
	try {
		const race = await raceLoader.load(raceId.toString())
		return race
	} catch (err) {
		throw err
	}
}

const transformRace = event => {
	return {
		...event._doc,
		_id: event.id,
		date: event._doc.date
	}
}

exports.transformRace = transformRace
