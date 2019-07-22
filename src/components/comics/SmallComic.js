import React from "react";
import { Link } from "react-router-dom";

const SmallComic = ({ comic }) => {
  const { title, imageURL, _id } = comic;
  return (
    <div className="containerSmall">
      <div className="containerexpositor">
        <div className="">
          <Link to={`/comics/${_id}`} className="">
            {" "}
            <img src={imageURL} className="SmallComic-image" alt={title} />{" "}
          </Link>
        </div>
        <div className="">
          <Link to={`/comics/${_id}`} className="SmallComic-title">
            <h5 className="SmallComic-h5 mt-1 text-center">{title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallComic;
