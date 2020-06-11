'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const graphMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Reading schema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
const schema = makeExecutableSchema({ typeDefs, resolvers})

// Execute query
// graphql(schema, '{ hello, saludo}', resolvers).then(data => console.log(data))

app.use('/api', graphMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => console.log(`Server listening at http://localhost:${port}/api`))
