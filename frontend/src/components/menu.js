import React, { useState } from "react"
import { Box, Layer, Heading, Button, Accordion, AccordionPanel } from "grommet"
import { Menu, Close } from "grommet-icons"
import { useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"

import Link from "../components/styles/link"
import ToggleAuth from "../components/toggleAuth"

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
            style={{ overflowY: "scroll" }}
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
  const { gcms } = useStaticQuery(graphql`
    query menuQuery {
      gcms {
        categories {
          id
          category
          tags {
            id
            tag
          }
        }
      }
    }
  `)

  return (
    <Accordion alignSelf="stretch">
      {gcms.categories.map(category => (
        <Category category={category} key={category.id} />
      ))}
      <Profile />
    </Accordion>
  )
}

function Category({ category }) {
  // TODO: make a set of tags arr to handle duplicate tags

  return (
    <AccordionPanel label={<Heading level={2}>{category.category}</Heading>}>
      <Box pad="medium" background="light-2" margin={{ vertical: "medium" }}>
        <Link to={`/${kebabCase(category.category)}`}>
          <Heading level={3} color="black">
            All Posts
          </Heading>
        </Link>
        <Link to={`/`}>
          <Heading level={3} color="black">
            All Places
          </Heading>
        </Link>
        {/* TAGS */}
        {category.tags.map(tag => (
          <Link
            key={tag.id}
            to={`/${kebabCase(category.category)}/${kebabCase(tag.tag)}`}
          >
            <Heading level={3}>#{tag.tag}</Heading>
          </Link>
        ))}
      </Box>
    </AccordionPanel>
  )
}

function Profile() {
  return (
    <AccordionPanel label={<Heading level={2}>Profile</Heading>}>
      <Box pad="medium" background="light-2" margin={{ vertical: "medium" }}>
        <Link to="/my-lists">
          <Heading level={3}>My Lists</Heading>
        </Link>
        <Link to="/app/lists">
          <Heading level={3}>Browse All Lists</Heading>
        </Link>
        <Link to="/my-events">
          <Heading level={3}>My Events</Heading>
        </Link>
        <Link to="/events">
          <Heading level={3}>Browse All Events</Heading>
        </Link>
        <ToggleAuth />
      </Box>
    </AccordionPanel>
  )
}
