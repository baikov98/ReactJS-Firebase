import React, { useEffect } from 'react'
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom'
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Navbar } from './components/NavBar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
function App() {
  
  return (
    <AlertState>
      <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Alert />
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </div>
      </BrowserRouter>
    </AlertState>
  )
}

export default App;
