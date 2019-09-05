import React, { Component } from 'react'
import Oldpic from './images/old.jpg'

export class Hist extends Component {
  render() {
    return (
      <>
        <main>
          <h1 className="hist-head">Museum History</h1>
          <p>
            The Rijksmuseum was founded in The Hague on 19 november 1798 and
            moved to Amsterdam in 1808, where it was first located in the Royal
            Palace and later in the Trippenhuis. The current main building was
            designed by Pierre Cuypers and first opened in 1885. On 13 April
            2013, after a ten-year renovation which cost € 375 million, the main
            building was reopened by Queen Beatrix. In 2013 and 2014, it was the
            most visited museum in the Netherlands with record numbers of 2.2
            million and 2.47 million visitors. It is also the largest art museum
            in the country.
          </p>
          <div className="hist-img">
            <img className="images" src={Oldpic} alt="Old Photo" />
          </div>
        </main>
      </>
    )
  }
}

export default Hist
