import React from 'react';
import './App.css';

const App = React.createClass({
  render() {
    return (
      <div className="app">
        <Landing />
      </div>
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

export default App;
