import friend from './friend'
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
    case 'UPDATE_FRIEND':
      return state.map(t =>
        friend(t, action)
      )
    default:
      return state
  }
}

export default friends