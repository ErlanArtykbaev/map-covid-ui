import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/scss/style.scss'
import Header from './components/layout/Header'

import MapGl from './components/MapGl'

function App() {

  return (
    <div className="app">
      <Header />
      <div className='main'>
        <MapGl />
        <div className='hi'>
        </div>
      </div>
    </div>
  )
}

export default App