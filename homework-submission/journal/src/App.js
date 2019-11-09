import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import 'antd/dist/antd.css'

import AuthComponent from './components/user/AuthComponent'
import LoginComponent from './components/user/LoginComponent'
import LogoutComponent from './components/user/LogoutComponent'
import CreateComponent from './components/actions/create/CreateComponent'
import FetchForDetailComponent from './components/actions/detail/FetchForDetailComponent'
import FetchForListComponent from './components/actions/list/FetchForListComponent'
import MenuComponent from './components/MenuComponent'
import ErrorComponent from './components/ErrorComponent'

function App() {
  const [error, setError] = useState(null)
  return (
    <div className="App" id="Appid">
      <Router>
        <MenuComponent />
        {error ? (<ErrorComponent error={error} />) : (
          <Switch>
            <Route path="/login" exact>
              <LoginComponent setError={setError} />
            </Route>
            <Route path="/logout" exact>
              <LogoutComponent setError={setError} />
            </Route>

            <AuthComponent>
              <Route path='/create' exact>
                <CreateComponent setError={setError}/>
              </Route>
              <Route path='/:id' exact>
                <FetchForDetailComponent setError={setError}/>
              </Route>
              <Route path='/' exact>
                <FetchForListComponent setError={setError}/>
              </Route>
            </AuthComponent>
          </Switch>)}
      </Router>
    </div>
  )
}

export default App
