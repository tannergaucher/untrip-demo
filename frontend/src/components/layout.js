import React from "react"
import PropTypes from "prop-types"
import { Grommet } from "grommet"

import Header from "./header"
import "./layout.css"

const theme = {
  global: {
    colors: {
      brand: "black",
    },
  },
  accordion: {
    border: {
      side: "bottom",
      color: "light-3",
    },
  },
  carousel: {
    icons: {
      color: "dark-1",
    },
  },
}

const Layout = ({ children }) => (
  <Grommet theme={theme}>
    <Header />
    <div>
      <main>{children}</main>
    </div>
  </Grommet>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
