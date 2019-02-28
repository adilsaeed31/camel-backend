const mongoose = require("mongoose")

const Schema = mongoose.Schema

const raceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model("Race", raceSchema)
