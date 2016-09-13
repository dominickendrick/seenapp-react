import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addFriend, updateFriend } from '../actions'
import DatePicker from 'react-datepicker'
import moment from 'moment'

require('react-datepicker/dist/react-datepicker.css');

const AddFriendComp = ({id, firstName, lastName, lastSeen, onLastSeenChange, onSubmit}) => {
  return (
      <form onSubmit={onSubmit}>
        <input name='firstName'/>
        <input name='lastName'/>
        <DatePicker id='lastSeen'
          selected={lastSeen}
          onChange={onLastSeenChange.bind(undefined, id)}
          locale='en'
        />

        <button type='submit'>Add Friend</button>
      </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.friend.id || 0,
    firstName: state.friend.firstName || "",
    lastName: state.friend.lastName || "",
    lastSeen: state.friend.lastSeen || moment()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLastSeenChange: (id, lastSeen) => {
      console.log(this, id, lastSeen, "this")
      dispatch(updateFriend(moment(lastSeen), id))
    },
    onSubmit: (event) => {
      const form = event.target.elements
      event.preventDefault()
      if (!form.firstName.value.trim() || !form.lastName.value.trim()) {
        return
      }
      dispatch(addFriend(form.firstName.value, form.lastName.value, moment(form.lastSeen.value) ))
    }
  }
}

AddFriendComp.propTypes = {
  id: PropTypes.number.isRequired,
  onLastSeenChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  lastSeen: PropTypes.object.isRequired
}

const AddFriend = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriendComp)

export default AddFriend