import React from "react"
import { useQuery } from "react-apollo-hooks"
import Error from "../components/error"

import Auth from "../components/auth"
import { CURRENT_USER_QUERY } from "./user"

export default ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <Error error={error} />

  return !data.me ? <Auth /> : children
}
