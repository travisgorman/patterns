import React from 'react';
import './App.css';

const App = React.createClass({
  render() {
    return (  
      <div className="app">
        <div className="landing">
          <h1>svideo</h1>
          <input type="text" placeholder="Search"/>
          <a href="#">or Browse All</a>
        </div>
      </div>
    )
  }
})

export default App;
