import React from "react"
import { useQuery } from "react-apollo-hooks"
import { Box, Heading, Text, Accordion, AccordionPanel } from "grommet"

import { CURRENT_USER_QUERY } from "../containers/user"
import Loading from "../components/loading"
import Error from "../components/error"
import ListEditMenu from "../components/listEditMenu"

function formatted(places) {
  if (places.length === 0) {
    return `No places added yet`
  }

  if (places.length === 1) {
    return `View ${places.length} Place`
  }
  return `View ${places.length} Places`
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
          margin="medium"
          pad="medium"
          elevation="medium"
          round="small"
        >
          {/* <Link to={`/app/list/${list.id}`}> */}
          <Text>Share on social</Text>
          <Box direction="row">
            <Heading level={2}>{list.title}</Heading>
            <ListEditMenu listId={list.id} listTitle={list.title} />
          </Box>
          <Places places={list.places} />
          {/* </Link> */}
        </Box>
      ))}
    </Box>
  )
}

const Places = ({ places }) => (
  <Accordion>
    <AccordionPanel
      label={<Text margin={{ vertical: "medium" }}>{formatted(places)}</Text>}
    >
      {/*  */}
      <Box background="light-1">
        {places.map(place => (
          <Heading key={place.name} level={5}>
            {place.name}
          </Heading>
        ))}
      </Box>
    </AccordionPanel>
  </Accordion>
)
