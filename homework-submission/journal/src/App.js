import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"

import './App.css'
import 'antd/dist/antd.css'

import CreateComponent from './components/CreateComponent'
import FetchForDetailComponent from './components/FetchForDetailComponent'
import FetchForListComponent from './components/FetchForListComponent'
import MenuComponent from './components/MenuComponent'

function App() {
  return (
    <div className="App" id="Appid">
      <Router>
        <MenuComponent />
        <Switch>
          <Route path='/create' exact>
            <CreateComponent />
          </Route>
          <Route path='/:id'>
            <FetchForDetailComponent />
          </Route>
          <Route path='/' exact>
            <FetchForListComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
