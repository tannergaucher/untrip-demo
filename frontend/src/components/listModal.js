import React, { useState } from "react"
import { Box, Layer, Button } from "grommet"
import { Add } from "grommet-icons"
import MyLists from "../containers/myLists"

export default function listModal({ gcmsId }) {
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
          >
            <MyLists gcmsId={gcmsId} />
          </Layer>
        </Box>
      )}
    </>
  )
}
