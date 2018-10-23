import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import LensDetail from './Components/Lens/LensDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>     
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/lenses/:id' component={LensDetail}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
