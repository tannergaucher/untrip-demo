const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const { getUserId, AuthError } = require('../utils/getUserId')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
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
  toggleEvent: (parent, { gcmsId }, context) => {
    const userId = getUserId(context)
    console.log(userId, gcmsId)

    //check if user has event in [events]
    // if !event, add event
    // if event, remove event
  },
  createList: async (parent, { title, gcmsId }, context) => {
    // create a list with title of title
    // place of placeId
    // connect to user

    const userId = getUserId(context)
    console.log(userId, title, placeId)

    if (!userId) {
      throw new AuthError()
    }

    const list = await context.prisma.createList({
      title: title,
      places: {
        create: {
          gcmsId: gcmsId,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    })
    console.log(list)
    return list
  },
  deleteList: (parent, { id }, context) => {
    return context.prisma.deleteList({ id })
  },
}

module.exports = {
  Mutation,
}
