const { buildSchema } = require("graphql")

module.exports = buildSchema(`
type Race {
  _id: ID!
  name: String!,
  totalPoints: Int!,
  code: Int!,
  position: Int!,
  ranks: [Ranks!]!
  events: [Events!]!
} 

type Ranks {
  position: Int!,
  category1: Int!,
  category2: Int!,
  category3: Int!,
  category4: Int!,
  category5: Int!
}

type Events {
  eventName: String!
  points: Int!,
  date: String!
  rounds: Int!,
  position: Int!,
  time: String!
  age: Int!
}

input RaceInput {
  name: String!,
  totalPoints: Int!,
  code: Int!,
  position: Int!,
  ranks: [RanksInput!]!
  events: [EventsInput!]!
}

input RanksInput {
  position: Int!,
  category1: Int!,
  category2: Int!,
  category3: Int!,
  category4: Int!,
  category5: Int!
}

input EventsInput {
  eventName: String!
  points: Int!,
  date: String!
  rounds: Int!,
  position: Int!,
  time: String!
  age: Int!
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
