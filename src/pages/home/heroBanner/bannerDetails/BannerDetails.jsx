import React from "react";
import "./BannerDetails.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import iso6391 from "iso-639-1";

import { HiPlay } from "react-icons/hi";
import Img from "../../../../components/lazyLoadImage/Img";

import PosterFallBack from "../../../../assets/no-poster.png";
import Genres from "../../../../components/genres/Genres";

const formatDate = (inputDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString(undefined, options);
};

const getYear = (inputDate) => {
  const date = new Date(inputDate);
  return date.getFullYear();
};

const BannerDetails = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  return (
    <div className="bannerItems">
      {data?.map((item) => {
        const posterUrl = item.poster_path
          ? url.poster + item.poster_path
          : PosterFallBack;

        return (
          <div key={item.id} className="bannerItem">
            <div className="details">
              <div className="title">
                {item.title || item.name}
                <span className="year">
                  {getYear(item.first_air_date || item.release_date)}
                </span>
              </div>
              <Genres data={item.genre_ids} />
              <div className="info">
                <div className="rating">
                  Rating: {item.vote_average.toFixed(1)}/10
                </div>

                <div className="type">{item.media_type}</div>
                <div className="lang">
                  Original Language: {iso6391.getName(item.original_language)}
                </div>

                <div className="date">
                  Release Date:{" "}
                  {formatDate(item.first_air_date || item.release_date)}
                </div>
              </div>
              <div className="summary">{item.overview}</div>

              <button className="trailer">
                Trailer <HiPlay />
              </button>
            </div>
            <div className="poster">
              <Img src={posterUrl} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerDetails;
