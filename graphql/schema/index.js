const { buildSchema } = require("graphql")

module.exports = buildSchema(`
type Race {
  _id: ID!
  title: String!
  description: String!
  date: String!
} 

type AuthData {
  token: String!
}

input RaceInput {
  title: String!
  description: String!
  date: String!
}

type RootQuery {
    races: [Race!]!
}

type RootMutation {
  createRace(raceInput: RaceInput): Race
}
 
schema {
    query: RootQuery
    mutation: RootMutation
}
`)
