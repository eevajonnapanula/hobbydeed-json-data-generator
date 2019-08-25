const { getEvents } = require('./events')

const resolvers = {
  Query: {
    events: (_, args) => getEvents(args.input.endDay, args.input.events),
  },
}

module.exports = resolvers
