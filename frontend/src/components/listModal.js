import React, { useState } from "react"
import { Box, Layer, Button, Heading, TextArea } from "grommet"
import { Add, Close } from "grommet-icons"
import GraphImg from "graphcms-image"

import TogglePlace from "../containers/togglePlace"
import CreateList from "../containers/createList"

export default function listModal({ name, gcmsId, image }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        label="Add To Untrip"
        onClick={() => setShow(true)}
        icon={<Add size="small" />}
        alignSelf="start"
        reverse={true}
        color="light-3"
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
            <Box pad="large">
              <GraphImg image={image} />
              <Heading level={2}>{`Add ${name} to My Untrip`}</Heading>
              <TogglePlace gcmsId={gcmsId} name={name} image={image} />
            </Box>
            <Box margin="medium">
              <CreateList gcmsId={gcmsId} name={name} image={image} />
            </Box>
          </Layer>
        </Box>
      )}
    </>
  )
}
