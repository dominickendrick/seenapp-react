import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import seenApp from './reducers'
import App from './components/App'

let store = createStore(seenApp,
    {
        friend: {
            id:  0,
            firstName: "",
            lastName: "",
            lastSeen: {}
        },
        friends:[]
    }
  )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)