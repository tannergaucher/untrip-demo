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
    return context.prisma.list({ id: listId })
  },
  lists: async (parent, args, context) => {
    const lists = await context.prisma.lists({
      where: {
        isPrivate: false,
      },
    })

    return lists
  },
}

module.exports = {
  Query,
}
