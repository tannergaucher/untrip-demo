const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { getUserId, AuthError } = require('../utils/getUserId')
const { hasPermission } = require('../utils/hasPermission')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
      permissions: { set: ['FREE_USER'] },
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)
    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })
    return {
      token,
      user,
    }
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for this email`)
    }
    const passwordValid = await compare(password, user.password)

    if (!passwordValid) {
      throw new Error(`Invalid Password`)
    }
    const token = sign({ userId: user.id }, process.env.APP_SECRET)
    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })
    return {
      token,
      user,
    }
  },
  logout: (parent, { id }, context) => {
    context.response.clearCookie('token')
    return { message: 'Goodbye' }
  },
  toggleEvent: async (parent, { gcmsId }, context) => {
    const userId = getUserId(context)

    const [existingEvent] = await context.prisma.user({ id: userId }).events({
      where: {
        gcmsId: gcmsId,
      },
    })

    if (!existingEvent) {
      const event = await context.prisma.createEvent({
        gcmsId: gcmsId,
        user: {
          connect: {
            id: userId,
          },
        },
      })
      return event
    } else {
      const event = await context.prisma.deleteEvent({
        id: existingEvent.id,
      })
      return event
    }
  },
  createList: async (parent, { title, gcmsId, name }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new AuthError()
    }
    const list = await context.prisma.createList({
      title: title,
      places: {
        create: {
          gcmsId: gcmsId,
          name: name,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    })
    return list
  },
  deleteList: (parent, { listId }, context) => {
    return context.prisma.deleteList({ id: listId })
  },
  togglePlace: async (parent, { listId, gcmsId, name }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new AuthError()
    }
    // query users list of listId for a place with gcmsId of gcmsId
    const [existing] = await context.prisma
      .user({ id: userId })
      .lists({
        where: {
          id: listId,
        },
      })
      .places({
        where: {
          gcmsId: gcmsId,
        },
      })

    if (existing.places.length) {
      // remove place from list
      return context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            delete: {
              id: existing.places[0].id,
            },
          },
        },
      })
    } else {
      // add place to list
      return context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            create: {
              gcmsId: gcmsId,
              name: name,
            },
          },
        },
      })
    }
  },
  toggleIsPrivateList: async (parent, { listId }, context) => {
    const userId = getUserId(context)
    if (!userId) {
      throw new AuthError()
    }
    // get the users list of id listId
    const [list] = await context.prisma.user({ id: userId }).lists({
      where: {
        id: listId,
      },
    })
    // if list is private, set isPrivate to false
    if (list.isPrivate) {
      const list = await context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          isPrivate: false,
        },
      })
      return list
    } else {
      // if list isn't private, set to private
      const list = await context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          isPrivate: true,
        },
      })
      return list
    }
  },
  updateListTitle: async (parent, { listId, newTitle }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const list = await context.prisma.updateList({
      where: {
        id: listId,
      },
      data: {
        title: newTitle,
      },
    })

    return list
  },
}

module.exports = {
  Mutation,
}
