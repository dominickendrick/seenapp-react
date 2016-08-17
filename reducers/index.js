import { combineReducers } from 'redux'
import friends from './friends'

export default function seenApp(state = {}, action) {
  return {
    friends: friends(state.friends, action)
  }
}