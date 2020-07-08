import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'


function App() {
  return (
    <>
      <Header />

      <Switch>

        <Route>
          <Home exact path= '/'/>
        </Route>

      </Switch>
    </>
  )
}

export default App;
