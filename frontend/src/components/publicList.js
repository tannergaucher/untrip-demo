import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import { Box, Heading } from "grommet"

import Loading from "./loading"
import Error from "./error"
import ListPlace from "./listPlace"
import Share from "./share"

const LIST_QUERY = gql`
  query LIST_QUERY($listId: ID!) {
    list(listId: $listId) {
      id
      title
      places {
        id
        name
        image
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
      <Share />
      <Box>
        {data.list.places.map(place => (
          <ListPlace place={place} key={place.id} />
        ))}
      </Box>
    </Box>
  )
}
