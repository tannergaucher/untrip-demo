const { getUserId, AuthError } = require('../utils/getUserId')

const Query = {
  me: async (parent, args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return context.prisma.user({ id: userId })
  },
  // listPlaces: async (parent, { listId }, context) => {
  //   // check if authed user
  //   const userId = getUserId(context)

  //   if (!userId) {
  //     throw new AuthError()
  //   }

  //   const [list] = await context.prisma
  //     .user({ id: userId })
  //     .lists({ where: { id: listId } })
  //     .places()

  //   return list.places

  //   // query the users list of listId
  //   // return the places of that list
  // },
}

module.exports = {
  Query,
}
