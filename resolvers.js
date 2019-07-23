const { getEvents } = require('./events')

const resolvers = {
  Query: {
    events: (_, { input }) => getEvents(input.endDay, input.events),
  },
}

module.exports = resolvers
