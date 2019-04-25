import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Heading } from "grommet"

import Loading from "./loading"
import Error from "./error"
import Link from "./styles/link"
import Logout from "../containers/logout"
import { CURRENT_USER_QUERY } from "../containers/user"

export default function toggleAuth() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      {data.me ? (
        <Logout />
      ) : (
        <Link to="/login">
          <Heading level={3}>Login</Heading>
        </Link>
      )}
    </>
  )
}
