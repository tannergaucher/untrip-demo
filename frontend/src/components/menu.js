import React, { useState } from "react"
import { Box, Layer, Heading, Button, Accordion, AccordionPanel } from "grommet"
import { Menu, Close } from "grommet-icons"

import Link from "../components/styles/link"
import Logout from "../containers/logout"

export default function menu() {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button icon={<Menu />} onClick={() => setShow(true)} margin="none" />
      {show && (
        <>
          <Layer
            position="right"
            full="vertical"
            onClickOutside={() => setShow(false)}
            onEsc={() => setShow(false)}
          >
            <Box justify="between" direction="row">
              <Heading level={3} margin="medium">
                Untrip
              </Heading>

              <Button
                icon={<Close />}
                onClick={() => setShow(false)}
                alignSelf="end"
              />
            </Box>
            <Box align="end" pad="large">
              <AccordionMenu />
            </Box>
          </Layer>
        </>
      )}
    </>
  )
}

function AccordionMenu() {
  return (
    <Accordion alignSelf="stretch">
      <AccordionPanel label={<Heading level={2}>Food & Drink</Heading>}>
        <Box pad="medium" background="light-2">
          <Heading level={3}>Map Subcategory</Heading>
        </Box>
      </AccordionPanel>
      <AccordionPanel label={<Heading level={2}>Music</Heading>}>
        <Box pad="medium" background="light-2">
          <Heading level={3}>Map Subcategory</Heading>
        </Box>
      </AccordionPanel>
      <AccordionPanel label={<Heading level={2}>Culture</Heading>}>
        <Box pad="medium" background="light-2">
          <Heading level={3}>Map Subcategory</Heading>
        </Box>
      </AccordionPanel>
      <AccordionPanel label={<Heading level={2}>Profile</Heading>}>
        <Box pad="medium" background="light-2">
          <Link to="/lists">
            <Heading level={3}>My Untrips</Heading>
          </Link>
          <Link to="/events">
            <Heading level={3}>Events</Heading>
          </Link>
          <Logout />
        </Box>
      </AccordionPanel>
    </Accordion>
  )
}
