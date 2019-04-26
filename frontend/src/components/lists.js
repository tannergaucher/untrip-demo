import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Box, Heading, Text, Accordion, AccordionPanel } from "grommet"
import GraphImg from "graphcms-image"

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
            {list.isPrivate ? <Text>Private</Text> : <Share />}
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
          <Place place={place} key={place.id} />
        ))}
      </Box>
    </AccordionPanel>
  </Accordion>
)

// CHANGE TO listPlace component
function Place({ place }) {
  const { loading, error } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <>
      <Heading key={place.name} level={5}>
        {place.name}
      </Heading>
      {place.image && (
        <GraphImg
          image={JSON.parse(place.image)}
          maxWidth={100}
          style={{ width: "100px" }}
        />
      )}
    </>
  )
}
