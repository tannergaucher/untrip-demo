import React from "react"
import { Heading } from "grommet"

import Layout from "../components/layout"
import MyLists from "../components/myLists"
import PleaseLogin from "../containers/pleaseLogin"

export default function lists() {
  return (
    <Layout>
      <PleaseLogin>
        <Heading level={1} margin="medium">
          My Untrips
        </Heading>
        <MyLists />
      </PleaseLogin>
    </Layout>
  )
}
