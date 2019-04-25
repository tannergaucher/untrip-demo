import React from "react"
import { Box, Button } from "grommet"
import { Facebook, Instagram, Twitter, Map } from "grommet-icons"

export default function share() {
  return (
    <Box direction="row" align="center">
      <Box direction="row">
        <Button icon={<Facebook size="small" />} />
        <Button icon={<Instagram size="small" />} />
        <Button icon={<Twitter size="small" />} />
        <Button icon={<Map size="small" />} />
      </Box>
    </Box>
  )
}
