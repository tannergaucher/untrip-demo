import React, { useState } from "react"
import { CheckBox, Box } from "grommet"

export default function themeToggle() {
  const [dark, setDark] = useState(false)

  return (
    <Box margin={{ vertical: "large" }}>
      <CheckBox
        label="Dark"
        checked={dark}
        onChange={e => setDark(e.target.checked)}
        toggle={true}
      />
    </Box>
  )
}
