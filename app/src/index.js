import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Store from './store'
import 'typeface-roboto'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('root'))
