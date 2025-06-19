//To make data available globally for any component in the app
// we import everything here

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
// root: the entry point where React app gets inserted into the webpage
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}> {/*It makes the Redux store available to entire app (and all its components) */}
    <App /> {/* actual main React component (the root of the app). */}
    </Provider>
  </React.StrictMode>,
)