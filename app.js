const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const path = require('path')
const { Seeder } = require('mongo-seeding')

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')
const isAuth = require('./middleware/is-auth')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200)
	}
	next()
})

app.use(isAuth)

app.use(
	'/graphql',
	graphqlHttp({
		schema: graphQlSchema,
		rootValue: graphQlResolvers,
		graphiql: true
	})
)

const DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/camel'
mongoose
	.connect(DB_URL, {
		useNewUrlParser: true
	})
	.then(() => {
		app.listen(8000)
	})
	.catch(err => {
		console.log(err)
		throw err
	})

const config = {
	database: DB_URL,
	dropDatabase: false
}

const seeder = new Seeder(config)
const collections = seeder.readCollectionsFromPath(path.resolve('./util/db/'))

seeder
	.import(collections)
	.then(() => {
		console.log('Successfully Seeded')
	})
	.catch(err => {
		console.log('Error', err)
	})
