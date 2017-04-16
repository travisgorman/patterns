import React from 'react'

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string
    })
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          <img
            src={`/public/img/posters/${poster}`}
           />
          <p>{description}</p>
        </section>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder='0'
          allowFullscreen />
      </div>
    )
  }
})
export default Details
