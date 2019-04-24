const { getUserId, AuthError } = require('../utils/getUserId')

const Query = {
  me: async (parent, args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return context.prisma.user({ id: userId })
  },
  list: async (parent, { listId }, context) => {
    // all lists are public for now
    // TODO: render all lists where public === true
    // if private, only let permissioned users see that list

    return context.prisma.list({ id: listId })
  },
}

module.exports = {
  Query,
}
