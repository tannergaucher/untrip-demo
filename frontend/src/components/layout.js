import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box } from "grommet"
import styled from "styled-components"
import { Query } from "react-apollo"
import { CURRENT_USER_QUERY } from "../containers/user"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const App = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;
`

const theme = {
  global: {
    colors: {
      brand: "tomato",
    },
  },
  button: {
    border: {
      // radius: "",
    },
  },
}

function Layout({ children }) {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {() => (
        <Grommet theme={theme}>
          <App>
            <Header />
            <Box as="main" style={{ gridArea: "main" }} background="">
              {children}
            </Box>
            <Footer />
          </App>
        </Grommet>
      )}
    </Query>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
