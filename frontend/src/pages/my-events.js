import React from "react"
import Layout from "../components/layout"
import { Heading } from "grommet"

import MyEvents from "../components/myEvents"

import PleaseLogin from "../containers/pleaseLogin"

export default function myEvents() {
  return (
    <Layout>
      <PleaseLogin>
        <Heading margin="medium">My Events</Heading>
        <MyEvents />
      </PleaseLogin>
    </Layout>
  )
}
