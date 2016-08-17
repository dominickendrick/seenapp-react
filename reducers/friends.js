const friend = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        lastSeen: action.lastSeen
      }
    case 'SEEN_FRIEND':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const friends = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return [
        ...state,
        friend(undefined, action)
      ]
    case 'SEEN_FRIEND':
      return state.map(t =>
        friend(t, action)
      )
    default:
      return state
  }
}

export default friends