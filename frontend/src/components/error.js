import React from "react"
import PropTypes from "prop-types"
import { Text } from "grommet"

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i}>
        <Text color="status-error">
          {error.message.replace("GraphQL error: ", "")}
        </Text>
      </div>
    ))
  }
  return (
    <>
      <Text color="status-error">
        {error.message.replace("GraphQL error: ", "")}
      </Text>
    </>
  )
}

DisplayError.defaultProps = {
  error: {},
}

DisplayError.propTypes = {
  error: PropTypes.object,
}

export default DisplayError
