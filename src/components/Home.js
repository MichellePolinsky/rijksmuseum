import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pic from './images/front.jpg'

export class Home extends Component {
  render() {
    return (
      <>
        <div className="h1">
          <h1>RijksMuseum</h1>
        </div>
        <h2 className="h2">Amsterdam, Netherlands</h2>
        <p>
          The Rijksmuseum is a Dutch national museum dedicated to arts and
          history in Amsterdam. The museum is located at the Museum Square in
          the borough Amsterdam South, close to the Van Gogh Museum, the
          Stedelijk Museum Amsterdam, and the Concertgebouw.
        </p>
        <div className="home-img">
          <img className="images" src={Pic} alt="Rijksmuseum" />
        </div>
      </>
    )
  }
}
export default Home
