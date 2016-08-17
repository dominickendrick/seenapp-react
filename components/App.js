import React from 'react'
import AddFriend from '../containers/AddFriend'
import VisibleFriendList from '../containers/VisibleFriendList'

const App = () => (
  <div>
    <AddFriend />
    <VisibleFriendList />
    <Footer />
  </div>
)

export default App