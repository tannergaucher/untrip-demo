import React, { useState } from "react"
import { Box, Layer, Button, Heading } from "grommet"
import { Add, Close } from "grommet-icons"
import Lists from "../containers/Lists"

export default function listModal({ name, gcmsId }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button
        label="Add To List"
        onClick={() => setShow(true)}
        icon={<Add size="small" />}
        alignSelf="start"
      />
      {show && (
        <Box>
          <Layer
            onClickOutside={() => setShow(false)}
            onEsc={() => setShow(false)}
            full={true}
            margin="large"
            pad="large"
            style={{ overflowY: "scroll" }}
          >
            <Button
              icon={<Close />}
              alignSelf="end"
              onClick={() => setShow(false)}
            />
            <Heading level={2} margin="large" textAlign="center">
              Add NAME to list
            </Heading>
            <Lists gcmsId={gcmsId} />
          </Layer>
        </Box>
      )}
    </>
  )
}
