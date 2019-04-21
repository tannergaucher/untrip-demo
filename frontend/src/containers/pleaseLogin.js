import React from "react"
import { useQuery } from "react-apollo-hooks"
import Error from "../components/error"
import { Box } from "grommet"

import Auth from "../components/auth"
import Loading from "../components/loading"
import { CURRENT_USER_QUERY } from "./user"

export default ({ children }) => {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Test />
  if (error) return <Error error={error} />

  return !data.me ? <Auth /> : children
}

const Test = () => {
  return (
    <Box fill="vertical" background="light-1" align="center" justify="center">
      <Loading />
    </Box>
  )
}
