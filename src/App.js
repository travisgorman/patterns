import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MyFirstComponent />
      </div>
    );
  }
}

var div = React.DOM.div
var h1 = React.DOM.h1

const MyTitle = React.createClass({
  render() {
    return (
      div(null, 
        h1({style: {color:this.props.color}}, 
          this.props.title)
      )
    )
  }
});

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      div(null, 
        MyTitleFactory({
            title: 'props are the best', color: 'peru'
        }),
        MyTitleFactory({
            title: 'semicolons are the worst', color: 'mediumaquamarine',
        }),
        MyTitleFactory({
            title: 'jk its okay if you like semicolons', color: 'papayawhip',
        }),
        MyTitleFactory({
            title: 'nah, just kidding. fuck semicolons', color: 'palevioletred',
        })
      )
    )
  }
});


export default App;
