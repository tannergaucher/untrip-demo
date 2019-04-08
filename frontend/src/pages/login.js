import React from "react"
import Layout from "../components/layout"
import { Tabs, Tab, Box } from "grommet"

import Signup from "../containers/signup"
import Login from "../containers/login"

export default function login() {
  return (
    <Layout>
      <Tabs>
        <Tab title="Log In">
          <Login />
        </Tab>
        <Tab title="Sign Up">
          <Signup />
        </Tab>
      </Tabs>
    </Layout>
  )
}
