import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CounterUseReducer from './CounterUseReducer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CounterUseReducer></CounterUseReducer>
  </React.StrictMode>,
)
