import React from "react"
import { Heading, Box } from "grommet"
import gql from "graphql-tag"
import { useQuery } from "react-apollo-hooks"

import Loading from "../components/loading"
import Error from "../components/error"
import Link from "../components/styles/link"

const PUBLIC_LISTS_QUERY = gql`
  query PUBLIC_LISTS_QUERY {
    lists {
      id
      title
    }
  }
`

export default function publicLists() {
  const { data, loading, error } = useQuery(PUBLIC_LISTS_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Box margin="medium">
      <Heading>Browse Lists</Heading>
      {data.lists.map(list => (
        <Box
          key={list.id}
          margin={{ vertical: "medium" }}
          background="light-2"
          pad="medium"
          elevation="small"
        >
          <Link to={`/app/list/${list.id}`}>
            <Heading level={3}>{list.title}</Heading>
          </Link>
        </Box>
      ))}
    </Box>
  )
}
