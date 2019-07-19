import React from "react";
import { Link } from "react-router-dom";

const SmallComic = ({ comic }) => {
  const { title, imageURL, _id } = comic;
  return (
    <div className="">
      <div className="">
        <div className="">
          <Link to={`/comics/${_id}`} className="SmallComic-image">
            {" "}
            <img src={imageURL} className="SmallComic-image" alt={title} />{" "}
          </Link>
        </div>
        <div className="">
          <Link to={`/comics/${_id}`} className="SmallComic-title">
            <h5 className="SmallComic-h5">{title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallComic;
