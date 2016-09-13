import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addFriend, updateFriend, newFriend } from '../actions'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import uuid from 'node-uuid'

require('react-datepicker/dist/react-datepicker.css');

const AddFriendComp = ({id, firstName, lastName, lastSeen, onLastSeenChange, onChangeFirstName, onChangeLastName, onSubmit}) => {
  return (
      <form onSubmit={onSubmit}>
        <input type="hidden" name="id" value={id}/>
        <input name='firstName' placeholder='First Name' onChange={onChangeFirstName}/>
        <input name='lastName' placeholder='Last Name' onChange={onChangeLastName}/>
        <DatePicker id='lastSeen'
          selected={lastSeen}
          onChange={onLastSeenChange.bind(undefined, id, firstName, lastName)}
          locale='en'
        />

        <button type='submit'>Add Friend</button>
      </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.friend.id || uuid.v4(),
    firstName: state.friend.firstName || "",
    lastName: state.friend.lastName || "",
    lastSeen: state.friend.lastSeen || moment()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLastSeenChange: (id, firstName, lastName, lastSeen) => {
      dispatch(updateFriend(id, firstName, lastName, moment(lastSeen)))
    },
    onChangeFirstName: (event) => {
      const form = event.target.parentNode
      dispatch(updateFriend(form.id.value, event.target.value, form.lastName.value, moment(form.lastSeen.value)))
    },
    onChangeLastName: (event) => {
      const form = event.target.parentNode
      dispatch(updateFriend(form.id.value, form.firstName.value, event.target.value, moment(form.lastSeen.value)))
    },
    onSubmit: (event) => {
      const form = event.target.elements
      event.preventDefault()
      if (!form.firstName.value.trim() || !form.lastName.value.trim()) {
        return
      }
      dispatch(addFriend(form.id.value, form.firstName.value, form.lastName.value, moment(form.lastSeen.value) ))
      dispatch(newFriend())
    }
  }
}

AddFriendComp.propTypes = {
  id: PropTypes.string.isRequired,
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