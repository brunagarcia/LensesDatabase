import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import LensDetail from './Components/Details/LensDetail'
import AddLens from './Components/Lens/AddLens'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>     
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/lenses/:id' component={LensDetail}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/addlens' component={AddLens}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
