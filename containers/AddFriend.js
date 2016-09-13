import React from 'react'
import { connect } from 'react-redux'
import { addFriend } from '../actions'

let AddFriend = ({ dispatch }) => {
  let firstName, lastName, lastSeen

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!firstName.value.trim() || !lastName.value.trim() || !lastSeen.valueAsNumber) {
          return
        }
        dispatch(addFriend(firstName.value, lastName.value, lastSeen.valueAsNumber ))
      }}>
        <input ref={node => {
          firstName = node
        }} />
        <input ref={node => {
          lastName = node
        }} />
        <input type='number' ref={node => {
          lastSeen = node
        }} />
        <button type="submit">
          Add Friend
        </button>
      </form>
    </div>
  )
}

AddFriend = connect()(AddFriend)

export default AddFriend