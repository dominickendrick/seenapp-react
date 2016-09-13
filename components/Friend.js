import React, { PropTypes } from 'react'

const Friend = ({ onClick, firstName, lastName, lastSeen }) => (
  <li onClick={onClick}>
    {firstName} {lastName} {lastSeen}
  </li>
)

Friend.propTypes = {
  onClick: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  lastSeen: PropTypes.number.isRequired
}

export default Friend