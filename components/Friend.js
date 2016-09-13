import React, { PropTypes } from 'react'
import moment from 'moment'

const Friend = ({ onClick, firstName, lastName, lastSeen }) => (
  <li onClick={onClick}>
    {firstName} {lastName} {lastSeen.format("dddd, MMMM Do YYYY, h:mm:ss a")}
  </li>
)

Friend.propTypes = {
  onClick: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  lastSeen: PropTypes.object.isRequired
}

export default Friend