import React from "react";
import { IMAGE_URL } from "../utils/db";
import { Link } from "react-router-dom";

const Card = ({
  id,
  vote_average,
  backdrop_path,
  poster_path,
  original_title,
}) => {
  return (
    <Link to={`movies/${id}`} className="items">
      <div className="card">
        <img src={IMAGE_URL + poster_path} alt="card-image" />
        <p className="title">{original_title}</p>
        <p className="rating">Rating:{vote_average}</p>
      </div>
    </Link>
  );
};

export default Card;
