import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ArtPage = () => {
  const [displayArt, setDisplayArt] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      `https://api.allorigins.win/get?url=https://www.rijksmuseum.nl/api/en/collection?key=C6axJ3QU&format=json`
    )

    const data = JSON.parse(resp.data.contents)
    const art = data.artObjects
    console.log(art)
    setDisplayArt(art)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <header className="header">Art, Art</header>
      <p>Pieces from Rijksmuseum, Amsterdam</p>
      {displayArt.map((artObjects, i) => {
        return (
          <section>
            <div className="image-cont">
              <img className="images" src={artObjects.webImage.url} alt={''} />
            </div>
            <div>
              <h3 key={i}>{artObjects.longTitle}</h3>
            </div>
          </section>
        )
      })}
    </>
  )
}
export default ArtPage
