import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import { Box, Heading } from "grommet"

import Loading from "./loading"
import Error from "./error"

// todo: If authed user && authed user === list owner, display edit view
// else display public view

const LIST_QUERY = gql`
  query LIST_QUERY($listId: ID!) {
    list(listId: $listId) {
      id
      title
      places {
        id
        name
      }
    }
  }
`

export default function list({ listId }) {
  const { data, loading, error } = useQuery(LIST_QUERY, {
    variables: { listId },
  })

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Box margin="medium">
      <Heading>{data.list.title}</Heading>
      <Box>
        {data.list.places.map(place => (
          <Heading key={place.id} level={4}>
            {place.name}
          </Heading>
        ))}
      </Box>
    </Box>
  )
}
