import React from 'react'
import { Link } from 'react-router-dom'

const SmallComic = ({ comic }) => {
    const {title, imageURL, id} = comic;
  return (
      <div className="cards">
          <div className="SmallComic-card">
              <div className="image-column">
                 <Link to={`/comics/${id}`} className="SmallComic-image" > <img src={imageURL} className="SmallComic-image" alt={title} /> </Link>
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