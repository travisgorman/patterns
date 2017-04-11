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

const MyTitle = React.createClass({
  render() {
    return (
      div(null, 'check out this component!!!')
    )
  }
});

const MyFirstComponent = React.createClass({
  render() {
    return (  
      React.createElement(MyTitle),
      React.createElement(MyTitle),
      React.createElement(MyTitle),
      React.createElement(MyTitle)
    )
  }
});


export default App;
