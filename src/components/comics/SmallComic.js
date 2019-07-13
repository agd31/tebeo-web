import React from 'react'
import { Link } from 'react-router-dom'

const SmallComic = ({ title, imageURL, id }) => {

  return (
      <div className="cards">
          <div className="SmallComic-card">
              <div className="photo-column">
                 <Link to={`/comics/${id}`} className="SmallComic-photo" > <img src={imageURL} className="SmallComic-photo" alt="Foto de comic" /> </Link>
              </div>
              <div className="SmallComic-text">
                <Link to={`/comics/${id}`}className="SmallComic-title" ><h5 className="SmallComic-h5" >{title}</h5></Link>
                
              </div>

          </div>
          <hr />
      </div>

  )
}

export default SmallComic