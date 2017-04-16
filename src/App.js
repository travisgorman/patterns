import React from 'react';
import './App.css';
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
          <Match pattern='/details/:id' component={Details} />
        </div>
      </BrowserRouter>
    )
  }
})

export default App;
