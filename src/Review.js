import React from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = ({ data, next, pre, ran }) => {
  const { id, name, job, image, text } = data;
  return (
    <div key={id} className="review">
      <div className="review__img-container">
        <img src={image} alt="img" className="review__img" />
        <span className="review__icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>

      <h4 className="review__name">{name}</h4>
      <h5 className="review__job">{job}</h5>
      <p className="review__desc">{text}</p>

      <div className="review__group-btn">
        <button className="btn btn--left" onClick={() => pre()}>
          <FaChevronLeft></FaChevronLeft>
        </button>

        <button className="btn btn--right" onClick={() => next()}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>

      <button className="btn--random" onClick={() => ran()}>
        Surpise me
      </button>
    </div>
  );
};

export default Review;
