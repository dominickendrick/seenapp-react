import { combineReducers } from 'redux'
import friends from './friends'
import friend from './friend'

export default function seenApp(state = {}, action) {
  return {
    friends: friends(state.friends, action),
    friend: friend(state.friend, action)
  }
}