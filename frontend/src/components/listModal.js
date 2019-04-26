import React, { useState } from "react"
import { Box, Layer, Button, Heading } from "grommet"
import { Add, Close } from "grommet-icons"
import GraphImg from "graphcms-image"

import TogglePlace from "../containers/togglePlace"
import CreateList from "../containers/createList"

export default function listModal({ place }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        label="Add To Untrip (list)"
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
              <GraphImg image={place.featuredImage} />
              <Heading level={2}>{`Add ${place.name} to My Untrip`}</Heading>
              <TogglePlace
                gcmsId={place.id}
                name={place.name}
                image={place.featuredImage}
              />
            </Box>
            <Box margin="medium">
              <CreateList
                gcmsId={place.id}
                name={place.name}
                image={place.featuredImage}
              />
            </Box>
          </Layer>
        </Box>
      )}
    </>
  )
}
