const List = {
  places: ({ id }, args, context) => {
    return context.prisma.list({ id }).places()
  },
  user: ({ id }, args, context) => {
    return context.prisma.list({ id }).user()
  },
}

module.exports = {
  List,
}
