import React from "react";
import { Link } from "react-router-dom";

const SmallComic = ({ comic }) => {
  const { title, imageURL, _id } = comic;
  return (
    <div className="containerSmall2 ">
      <div className="containerexpositor2 ">
        <div className="">
          <Link to={`/comics/${_id}`} className="">
            {" "}
            <img src={imageURL} className="SmallComic-image2" alt={title} />{" "}
          </Link>
        </div>
        <div className="">
          <Link to={`/comics/${_id}`} className="SmallComic-title2">
            <h5 className="SmallComic-h52 w-75 mt-1">{title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallComic;
