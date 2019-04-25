import React, { useState } from "react"
import { Box, Heading, Menu, Layer, Button } from "grommet"
import { Edit, FormPreviousLink } from "grommet-icons"

import DeleteList from "../containers/deleteList"

export default function ListEditMenu({ listId, listTitle }) {
  const [confirm, setConfirm] = useState(false)

  return (
    <>
      <Menu
        icon={<Edit size="small" />}
        items={[
          {
            label: `Delete ${listTitle}`,
            onClick: () => {
              setConfirm(true)
            },
          },
          {
            label: "Rename",
            onClick: () => {
              console.log("updateList mutation")
            },
          },
        ]}
      />
      {confirm && (
        <Layer
          onEsc={() => setConfirm(false)}
          onClickOutside={() => setConfirm(false)}
          responsive={false}
        >
          <Heading level={4} margin="medium">
            Are you sure you want to delete LIST NAME?
          </Heading>
          <Box direction="row" margin="medium">
            <Button
              label="Back"
              margin="medium"
              icon={<FormPreviousLink size="small" />}
              onClick={() => setConfirm(false)}
            />
            <DeleteList setConfirm={setConfirm} listId={listId} />
          </Box>
        </Layer>
      )}
    </>
  )
}
