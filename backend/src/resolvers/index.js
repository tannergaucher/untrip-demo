const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { List } = require('./List')

const resolvers = {
  Query,
  Mutation,
  User,
  List,
}

module.exports = {
  resolvers,
}
