const Race = require("../../models/race")

const { transformRace } = require("./merge")

module.exports = {
  races: async () => {
    try {
      const races = await Race.find()
      return races.map(race => {
        return transformEvent(race)
      })
    } catch (err) {
      throw err
    }
  },
  createRace: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!")
    }
    const race = new Race({
      title: args.raceInput.title,
      description: args.raceInput.description,
      date: new Date(args.raceInput.date),
      creator: req.userId
    })
    let createdRace
    try {
      const result = await race.save()
      createdRace = transformRace(result)

      return createdRace
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
