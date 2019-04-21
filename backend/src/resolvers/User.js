const User = {
  lists: ({ id }, args, context) => {
    return context.prisma.user({ id }).lists()
  },
  events: ({ id }, args, context) => {
    return context.prisma.user({ id }).events()
  },
}

module.exports = {
  User,
}
