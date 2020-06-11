'use strict'

const { graphql, buildSchema} = require('graphql')
const express = require('express')
const graphMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000

//Defined schema
const schema = buildSchema(`
    type Query {
    hello: String,
    saludo: String
}`)

//Resolvers
const resolvers = {
    hello: () => { return 'hello world!'},
    saludo: () => { return 'hello juan!'},
}

//Execute query
graphql(schema, '{ hello, saludo}', resolvers).then(data => console.log(data))

app.use('/api', graphMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => console.log(`Server listening at http://localhost:${port}/api`))
