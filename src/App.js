import React from 'react';
import './App.css';
import { HashRouter, Match } from 'react-router'
// import Landing from './Landing'
// import Search from './Search'


const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </HashRouter>
    )
  }
})

const Landing = React.createClass({
  render () {
    return (
      <div className="landing">
        <h1>patterns</h1>
        <input type="text" placeholder="Search"/>
        <a href="">or Browse All</a>
      </div>
    )
  }
})

const Search = React.createClass({
  render () {
    return (
      <h1>Search Page!</h1>
    )
  }
})

export default App;
