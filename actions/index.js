import uuid from 'node-uuid'

export const addFriend = (id, firstName, lastName, lastSeen) => {
  return {
    type: 'ADD_FRIEND',
    id,
    firstName,
    lastName,
    lastSeen
  }
}

export const updateFriend = (id, firstName, lastName, lastSeen) => {
  return {
    type: 'UPDATE_FRIEND',
    id: id,
    firstName,
    lastName,
    lastSeen
  }
}

export const newFriend = () => {
  return {
    type: 'NEW_FRIEND',
    id: uuid.v4()
  }
}

export const seenFriend = (id) => {
  return {
    type: 'SEEN_FRIEND',
    id
  }
}