import React from "react"
import { Heading } from "grommet"

import Layout from "../components/layout"
import Lists from "../components/lists"

export default function lists() {
  return (
    <Layout>
      <Heading level={1} margin="medium">
        My Untrips
      </Heading>
      <Lists />
    </Layout>
  )
}
