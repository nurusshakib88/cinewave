import React, { useState } from "react";
import "./Carousel.scss";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Img from "../../components/lazyLoadImage/Img";
import PosterFallBack from "../../assets/no-poster.png";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = data ? data.length : 0;

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const isAtFirstSlide = currentSlide === 0;
  const isAtLastSlide = currentSlide === totalSlides - 5;

  return (
    <div className="carousel">
      <div
        className="carouselItems"
        style={{ transform: `translateX(-${currentSlide * (100 / 5)}%)` }}
      >
        {data?.map((item, index) => (
          <div key={item.id} className="carouselItem">
            <div className="poster">
              <Img
                src={
                  item.poster_path
                    ? url.poster + item.poster_path
                    : PosterFallBack
                }
              />
              <div className="rating">{item.vote_average.toFixed(1)}</div>
              <Genres data={item.genre_ids} />
            </div>
            <div className="title">{item.title || item.name}</div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className={`prevButton ${isAtFirstSlide ? "disabled" : ""}`}
        disabled={isAtFirstSlide}
      >
        <HiArrowLeft />
      </button>
      <button
        onClick={goToNextSlide}
        className={`nextButton ${isAtLastSlide ? "disabled" : ""}`}
        disabled={isAtLastSlide}
      >
        <HiArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
