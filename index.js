const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
require('dotenv').config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`We are running in ${url}`)
})
