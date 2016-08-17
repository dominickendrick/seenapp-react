import { combineReducers } from 'redux'
import friends from './friends'

const seenApp = combineReducers({
  todos,
  visibilityFilter
})

export default seenApp