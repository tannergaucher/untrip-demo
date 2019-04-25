import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Box, Heading, Text, Accordion, AccordionPanel } from "grommet"

import { CURRENT_USER_QUERY } from "../containers/user"
import Loading from "../components/loading"
import Error from "../components/error"
import ListEditMenu from "../components/listEditMenu"
import Share from "../components/share"

function formatted(places) {
  if (places.length === 0) {
    return `No places added yet`
  }

  if (places.length === 1) {
    return `${places.length} Place`
  }
  return `${places.length} Places`
}

export default function lists() {
  const { data, loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error.message} />

  return (
    <Box>
      {data.me.lists.map(list => (
        <Box
          key={list.id}
          background="light-2"
          pad="small"
          margin={{ vertical: "medium" }}
        >
          <Box direction="row" align="center">
            <Share />
            {list.isPrivate && <Text>PRIVATE</Text>}
          </Box>
          <Box direction="row">
            <Heading level={2}>{list.title}</Heading>
            <ListEditMenu
              listId={list.id}
              listTitle={list.title}
              isPrivate={list.isPrivate}
            />
          </Box>
          <Places places={list.places} />
        </Box>
      ))}
    </Box>
  )
}

const Places = ({ places }) => (
  <Accordion>
    <AccordionPanel
      label={
        <Text margin={{ vertical: "medium" }} color="dark-4">
          {formatted(places)}
        </Text>
      }
    >
      <Box
        background="light-1"
        round="medium"
        margin="small"
        pad="small"
        elevation="small"
      >
        {places.map(place => (
          <Heading key={place.name} level={5}>
            {place.name}
          </Heading>
        ))}
      </Box>
    </AccordionPanel>
  </Accordion>
)
