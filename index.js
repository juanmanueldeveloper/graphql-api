'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const graphMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
require('dotenv').config()
const db = require('./db')

const app = express()
const port = process.env.port || 3000

// Reading schema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers })
const { DB, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env
const mongoURL = `${DB}${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

// Execute query
// graphql(schema, '{ hello, saludo}', resolvers).then(data => console.log(data))

app.use('/api', graphMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

db(mongoURL)
app.listen(port, () => console.log(`Server listening at http://localhost:${port}/api`))
