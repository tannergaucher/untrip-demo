import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Box, Heading } from "grommet"
import Link from "../components/styles/link"

import { CURRENT_USER_QUERY } from "../containers/user"
import Loading from "../components/loading"
import Error from "../components/error"

export default function lists() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error.message} />

  return (
    <Box margin="medium">
      {data.me.lists.map(list => (
        <Link to={`/app/list/${list.id}`} key={list.id}>
          <Heading level={3}>{list.title}</Heading>
        </Link>
      ))}
    </Box>
  )
}
