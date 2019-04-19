import React from "react"
import { useQuery } from "react-apollo-hooks"

import Auth from "../components/auth"
import { CURRENT_USER_QUERY } from "./user"

export default ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return null
  if (error) return <p>{error.message}</p>

  return !data.me ? <Auth /> : children
}
