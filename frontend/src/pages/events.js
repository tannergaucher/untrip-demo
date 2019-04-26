import React from "react"
import { Heading, Box } from "grommet"

import Layout from "../components/layout"
import AllEvents from "../components/allEvents"

export default function events() {
  return (
    <Layout>
      <Box pad="medium">
        <Heading level={1} color="black">
          Events
        </Heading>
        <AllEvents />
      </Box>
    </Layout>
  )
}
