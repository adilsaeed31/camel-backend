const { buildSchema } = require("graphql")

module.exports = buildSchema(`
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
} 

type AuthData {
  token: String!
  tokenExpiration: Int!
}

type RootQuery {
    events: [Event!]!
}
 
schema {
    query: RootQuery
}
`)
