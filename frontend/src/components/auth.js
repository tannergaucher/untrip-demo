import React from "react"
import { Tabs, Tab } from "grommet"
import Login from "../containers/login"
import Signup from "../containers/signup"

export default () => {
  return (
    <Tabs margin="xlarge">
      <Tab title="Log In">
        <Login />
      </Tab>
      <Tab title="Sign Up">
        <Signup />
      </Tab>
    </Tabs>
  )
}
