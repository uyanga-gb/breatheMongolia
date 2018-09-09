import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise"
import { AppContainer } from 'react-hot-loader'
import reducers from "./reducers"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

import App from './App'

const render = (Component) => {
  ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
    document.getElementById('root')
  )
}

render(App)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
