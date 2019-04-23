import React from "react"
import { Heading, Box } from "grommet"

import Layout from "../components/layout"
import Lists from "../components/lists"

export default function lists() {
  return (
    <Layout>
      <Box>
        <Heading level={1} margin="medium">
          Lists
        </Heading>
        <Lists />
      </Box>
    </Layout>
  )
}
