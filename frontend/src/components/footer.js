import React from "react"
import { Button, Box } from "grommet"
// import { List, Calendar, User } from "grommet-icons"
import { navigate } from "@reach/router"

export default function footer() {
  return (
    <Box
      direction="row"
      elevation="medium"
      justify="around"
      background="light-2"
      pad="medium"
      style={{ position: "sticky", bottom: "0" }}
    >
      <Button
        // icon={<List />}
        onClick={() => navigate(`/my-lists`)}
        label="Lists"
        plain
      />
      <Button
        //  icon={<Calendar />}
        onClick={() => navigate(`/events`)}
        label="Events"
        plain
      />
      <Button
        // icon={<User />}
        label="Menu"
        onClick={() => navigate(`/me`)}
        plain
      />
    </Box>
  )
}
