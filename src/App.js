import React from 'react';
import './App.css';
import { HashRouter, Match } from 'react-router'
import { Link } from 'react-router'
// import Landing from './Landing'
// import Search from './Search'


const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>SVIDEOS</h1>
        <input type='text' placeholder='Search...' />
        <Link to='/search'> or Browse ALL </Link>
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
