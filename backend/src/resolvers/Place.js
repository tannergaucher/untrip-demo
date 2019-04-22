const Place = {
  list: ({ id }, args, context) => {
    return context.prisma.place({ id }).list()
  },
}

module.exports = {
  Place,
}
