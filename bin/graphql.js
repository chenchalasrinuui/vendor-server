var express = require('express')

var { ApolloServer } = require('apollo-server-express')

var typeDefs = require('../graphql/typeDef')
var resolvers = require('../graphql/resolvers')

var app = express();

async function start() {
    var server = new ApolloServer({ typeDefs, resolvers })

    await server.start()

    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(2020, () => {
        console.log('server started')
    })
}

start()


