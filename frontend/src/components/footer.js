import React from "react"
import { Button, Stack, Box, Text } from "grommet"
import { Home, User, Calendar, List } from "grommet-icons"
import { navigate } from "@reach/router"

export default function footer() {
  return (
    <Box direction="row" elevation="medium" justify="around">
      {/* Filter active page, set color  */}
      <Button icon={<Home />} onClick={() => navigate(`/`)} />
      <Stack anchor="top-right">
        <Button icon={<Calendar />} onClick={() => navigate(`/my-events`)} />
        {/* Display box for 3 seconds after state change, then fade out */}
        <Box
          animation={["fadeIn", "jiggle"]}
          pad={{ horizontal: "xsmall" }}
          background="light-3"
          round
        >
          <Text color="brand">1</Text>
        </Box>
      </Stack>
      <Button icon={<List />} onClick={() => navigate(`/my-lists`)} />
      <Button icon={<User />} onClick={() => navigate(`/me`)} />
    </Box>
  )
}
