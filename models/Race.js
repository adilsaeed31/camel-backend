const mongoose = require('mongoose')

const Schema = mongoose.Schema

const raceSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	totalPoints: {
		type: Number,
		required: true
	},
	code: {
		type: Number,
		required: true
	},
	position: {
		type: Number,
		required: true
	},
	ranks: [
		{
			position: {
				type: String,
				required: true
			},
			category1: {
				type: Number,
				required: true
			},
			category2: {
				type: Number,
				required: true
			},
			category3: {
				type: Number,
				required: true
			},
			category4: {
				type: Number,
				required: true
			},
			category5: {
				type: Number,
				required: true
			}
		}
	],
	events: [
		{
			eventName: {
				type: String,
				required: true
			},
			points: {
				type: String,
				required: true
			},
			date: {
				type: String,
				required: true
			},
			rounds: {
				type: Number,
				required: true
			},
			position: {
				type: Number,
				required: true
			},
			time: {
				type: String,
				required: true
			},
			age: {
				type: Number,
				required: true
			}
		}
	],
	color: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Races', raceSchema, 'Races')
