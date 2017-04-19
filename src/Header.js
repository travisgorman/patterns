import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { func, string, bool } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    dispatch: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermChange (e) {
    this.props.dispatch(setSearchTerm(e.target.value))
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <input
          type='text'
          placeholder={'Search'}
          value={this.props.searchTerm}
          onChange={this.handleSearchTermChange} />
      )
    } else {
        utilSpace = <h2><Link to='/search'>Back</Link></h2>
      }
    return (
      <header>
        <h1><Link to='/'>svideo</Link></h1>
        {utilSpace}
      </header>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
