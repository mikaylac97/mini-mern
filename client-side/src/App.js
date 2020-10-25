import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import ShowAll from './components/ShowAll';
import Details from './components/Details'


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/playlists' component={ShowAll} />
          <Route exact path='/playlists/:id' component={Details} />
        </Switch>
      </div>
    )
  }
}
