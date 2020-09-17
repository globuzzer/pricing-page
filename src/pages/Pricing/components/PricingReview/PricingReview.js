import React from "react";
import "./style.css";

export const PricingReview = (props) => {
  const { review } = props;
  const { ava, url } = review;

  const navigateTo = (url) => {};
  return (
    <button
      type="button"
      className="review_container"
      onClick={() => navigateTo(url)}
    >
      <img src={ava} alt="ava" className="review_ava" />
    </button>
  );
};
