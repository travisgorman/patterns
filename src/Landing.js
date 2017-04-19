import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatchSearchTerm: func
  },
  // contextTypes: {
  //   router: object
  // },
  // handleSearchTermChange (e) {
  //   this.props.dispatchSearchTerm(e.target.value)
  // },
  handleSearchTermChange (e) {
    this.props.dispatchSearchTerm(e.target.value)
  },
  // handleSearchSubmit (e) {
  //   this.context.router.transitionTo('/search')
  // },
  handleSearchSubmit (e) {
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>SquirkFlix</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type='text'
            placeholder='Search...'
            value={this.props.searchTerm}
            onChange={this.handleSearchTermChange} />
        </form>
        <Link to='/search'> or Browse ALL </Link>
      </div>
    )
  }
})

export default Landing
