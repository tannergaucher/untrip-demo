import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import fetch from "isomorphic-fetch"

const link = createHttpLink({
  uri: "http://localhost:4000",
  credentials: "include",
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  fetch,
  link,
  cache,
  resolvers: {
    Mutation: {},
    Query: {},
  },
})

const data = {
  test: true,
}

cache.writeData({ data })

client.onResetStore(() => {
  cache.writeData({ data })
})
