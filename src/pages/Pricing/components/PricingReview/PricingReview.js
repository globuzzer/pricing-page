import React from "react";
import "./style.css";

export const PricingReview = (props) => {
    const {review} = props;
    const {ava, url} = review;
    // const stars = [];
    // for (let i = 1; i <= 5; i += 1) {
    //     i > score
    //         ? stars.push(<MdStarBorder className="review_score_star" key={i} />)
    //         : stars.push(<MdStar className="review_score_star" key={i} />);
    // }
    const navigateTo = (url) => {
        window.location.href = `${url}`;
    };
    return (
        <button type="button" className="review_container" onClick={() => navigateTo(url)}>
            <img src={ava} alt="ava" className="review_ava" />
            {/* <div className="score_container"> {stars}</div>
            <p className="review_content">{content}</p> */}
        </button>
    );
};
