import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Heading, Box } from "grommet"

import { CURRENT_USER_QUERY } from "../containers/user"
import Loading from "../components/loading"
import Error from "../components/error"

export default function lists() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error.message} />

  return (
    <>
      {data.me.lists.map(list => (
        <List key={list.id} title={list.title} places={list.places} />
      ))}
    </>
  )
}

function List({ title, places }) {
  return (
    <Box pad="medium">
      <Heading level={2}>{title}</Heading>
      {places.map(place => (
        <Box key={place.id}>
          <Heading level={4}>Place name</Heading>
        </Box>
      ))}
    </Box>
  )
}
