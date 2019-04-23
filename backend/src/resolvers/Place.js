const Place = {
  list: ({ id }, args, context) => {
    return context.prisma.place({ id }).list()
  },
  name: ({ id }, args, context) => {
    return context.prisma.place({ id }).name()
  },
}

module.exports = {
  Place,
}
