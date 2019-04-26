import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Box, Heading } from "grommet"
import { kebabCase } from "lodash"

import { CURRENT_USER_QUERY } from "../containers/user"
import Loading from "../components/loading"
import Error from "../components/error"
import Link from "../components/styles/link"

export default function myEvents() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)
  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      {data.me.events.map(event => (
        <Box key={event.id}>
          <Link to={`/event/${kebabCase(event.name)}`}>
            <Heading level={3} margin="medium">
              {event.name}
            </Heading>
          </Link>
        </Box>
      ))}
    </>
  )
}
