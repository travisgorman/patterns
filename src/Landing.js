import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  contextTypes: {
    router: object
  },
  handleSearchTermChange (e) {
    this.props.dispatchSetSearchTerm(setSearchTerm(e.target.value))
  },
  handleSearchSubmit (e) {
    e.preventDefault()
    this.context.router.transitionTo('/search')
  }
  render () {
    return (
      <div className='landing'>
        <h1>SquirkFlix</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type='text'
            onChange={this.handleSearchTermChange}
            value={this.props.searchTerm}
            placeholder='Search...' />
        </form>
        <Link to='/search'> or Browse ALL </Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm(setSearchTerm(search))
  }
}
export default connect(mapStateToProps)(Landing)
