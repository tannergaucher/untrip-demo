const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { List } = require('./List')
const { Place } = require('./Place')

const resolvers = {
  Query,
  Mutation,
  User,
  List,
  Place,
}

module.exports = {
  resolvers,
}
