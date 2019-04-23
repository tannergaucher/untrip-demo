import React, { useState } from "react"
import { Box, Layer, Button, Heading } from "grommet"
import { Add, Close } from "grommet-icons"
import TogglePlace from "../containers/togglePlace"

export default function listModal({ name, gcmsId }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button
        label="Add To List"
        onClick={() => setShow(true)}
        icon={<Add size="small" />}
        alignSelf="start"
        reverse={true}
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
            <Heading level={2} margin="large">
              {`Add ${name} to List`}
            </Heading>
            <TogglePlace gcmsId={gcmsId} name={name} />
          </Layer>
        </Box>
      )}
    </>
  )
}
