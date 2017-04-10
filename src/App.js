import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MyFirstComponent />
      </div>
    );
  }
}

const MyFirstComponent = React.createClass({
  render() {
    return (  
      React.DOM.div(  
        null, React.DOM.h1(  
          null, 'This is my first component!')
      )
    )
  }
})


export default App;
