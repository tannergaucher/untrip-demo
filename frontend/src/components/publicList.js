import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import { Box, Heading } from "grommet"
import { kebabCase } from "lodash"

import Link from "./styles/link"

import Loading from "./loading"
import Error from "./error"

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

// TODO: Change name to PublicList
// list that is shared on social
// TODO: if authed and list owner, display edit options

export default function list({ listId }) {
  const { data, loading, error } = useQuery(LIST_QUERY, {
    variables: { listId },
  })

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Box margin="medium">
      <Box direction="row" align="center">
        <Heading>{data.list.title}</Heading>
        <Heading level={6} color="dark-3" margin="none">
          Share List
        </Heading>
      </Box>
      <Box>
        {data.list.places.map(place => (
          <Heading key={place.id} level={4}>
            <Link to={`/places/${kebabCase(place.name)}`}>{place.name}</Link>
          </Heading>
        ))}
      </Box>
    </Box>
  )
}
