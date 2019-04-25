import React from "react"
import { Heading } from "grommet"

import Layout from "../components/layout"
import Lists from "../components/lists"
import PleaseLogin from "../containers/pleaseLogin"

export default function lists() {
  return (
    <Layout>
      <PleaseLogin>
        <Heading level={1} margin="medium">
          My Untrips
        </Heading>
        <Lists />
      </PleaseLogin>
    </Layout>
  )
}
