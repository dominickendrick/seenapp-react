import React, { PropTypes } from 'react'
import Friend from './Friend'

const FriendList = ({ friends, onFriendClick }) => (
  <ul>
    {friends.map( friend =>
      <Friend
        key={friend.id}
        {...friend}
        onClick={() => onFriendClick(friend.id)}
      />
    )}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    lastSeen: PropTypes.object.isRequired
  }).isRequired).isRequired,
  onFriendClick: PropTypes.func.isRequired
}

export default FriendList