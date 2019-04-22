import React, { useState } from "react"
import { Box, Layer, Button } from "grommet"
import MyLists from "../containers/myLists"

export default function listModal({ gcmsId }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button label="Add name to list" onClick={() => setShow(true)} plain />
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
