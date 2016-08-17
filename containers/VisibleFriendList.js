import { connect } from 'react-redux'
import FriendList from '../components/FriendList'

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFriendClick: (id) => {
      dispatch(toggleFriend(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList)

export default VisibleFriendList