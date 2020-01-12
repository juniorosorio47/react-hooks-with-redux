import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'

import Header from './components/Header'

import Routes from './routes'
import store from './store'
import history from './services/history'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <ToastContainer />
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
