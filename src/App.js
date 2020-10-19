import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/scss/style.scss'

import Header from './components/layout/Header'
import Admin from './components/pages/Admin'
import Home from './components/pages/Home'

import {StoreProvider} from './store/Store'

function App() {

  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <StoreProvider>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/admin'>
              <Admin />
            </Route>
          </StoreProvider>
        </Switch>
      </Router>
    </div>
  )
}

export default App