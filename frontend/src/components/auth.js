import React from "react"
import { Tabs, Tab, Box } from "grommet"
import Login from "../containers/login"
import Signup from "../containers/signup"

export default () => {
  return (
    <Box fill="vertical" justify="center" alignContent="center">
      <Box
        elevation="medium"
        margin="medium"
        background="light-1"
        round="small"
        alignSelf="center"
      >
        <Tabs margin="xlarge">
          <Tab title="Log In">
            <Login />
          </Tab>
          <Tab title="Sign Up">
            <Signup />
          </Tab>
        </Tabs>
      </Box>
    </Box>
  )
}
