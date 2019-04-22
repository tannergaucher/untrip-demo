import React, { useState } from "react"
import { Box, Layer, Heading, Button } from "grommet"
import { Menu, Close } from "grommet-icons"

export default function menu() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button icon={<Menu />} onClick={() => setShow(true)} />
      {show && (
        <>
          <Layer
            position="right"
            full="vertical"
            onClickOutside={() => setShow(false)}
            onEsc={() => setShow(false)}
          >
            <Button
              icon={<Close />}
              onClick={() => setShow(false)}
              alignSelf="end"
            />
            <Box align="end" pad="medium">
              <Heading level={2}>Menu</Heading>
              <Heading level={2}>My Lists</Heading>
              <Heading level={2}>My Places</Heading>
            </Box>
          </Layer>
        </>
      )}
    </>
  )
}
