import React from "react";
import { IMAGE_URL } from "../utils/db";
import { Link } from "react-router-dom";

const Card = ({
  id, 
  genre_ids,
  release_date,
  vote_average,
  backdrop_path,
  poster_path,
  original_title,
}) => {
  return (
      <Link to={`movies/${id}`} className="card">
        <div className="card__image-container">
        <img src={IMAGE_URL + poster_path} alt="title" />
        </div>
        <div className="card__content">
        <p className="card__title text--medium">{original_title}</p>
        <div className="card__info">
        <p className="text--medium"> {release_date}</p>
        <p className="card__price text--medium">Rating: {vote_average}</p>
        </div>
        </div>
      </Link>
  );
};

export default Card;
