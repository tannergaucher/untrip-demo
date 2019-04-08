import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <h6>Gatsby GraphCMS Apollo Prisma Demo</h6>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
