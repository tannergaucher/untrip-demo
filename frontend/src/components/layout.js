import React from "react"
import PropTypes from "prop-types"
import { Grommet } from "grommet"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const App = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: auto 1fr auto;
`

const Main = styled.main`
  grid-area: main;
`

const theme = {
  global: {
    colors: {
      // brand: "rgba(0, 0, 0, .8)",
    },
  },
  button: {
    border: {
      // radius: "",
    },
  },
}

const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <App>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </App>
  </Grommet>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
