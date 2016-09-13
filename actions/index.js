let nextFriendId = 0
export const addFriend = (firstName, lastName, lastSeen) => {
  return {
    type: 'ADD_FRIEND',
    id: nextFriendId++,
    firstName,
    lastName,
    lastSeen
  }
}

export const updateFriend = (lastSeen, id) => {
  return {
    type: 'UPDATE_FRIEND',
    id: id,
    lastSeen: lastSeen
  }
}


export const seenFriend = (id) => {
  return {
    type: 'SEEN_FRIEND',
    id
  }
}