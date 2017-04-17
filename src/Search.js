import React from 'react'
import preload from './data.json'
import ShowCard from './ShowCard'
import Header from './Header'

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange} />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`
              .toUpperCase()
                .indexOf(this.state.searchTerm
                  .toUpperCase()) >= 0)
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
        </div>
      </div>
    )
  }
})
export default Search
