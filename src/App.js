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
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} show={show} />
          )
        })}
      </div>
    )
  }
})

const ShowCard = React.createClass({
  propTypes: {
    show: React.PropTypes.object
  },
  render () {
    const { poster, title, year, description } = this.props.show
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default App;
