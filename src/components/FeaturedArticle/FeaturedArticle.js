import React from "react";
import "./style.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouteMatch, Link } from "react-router-dom";

export const FeaturedArticle = (props) => {
  const { articleData } = props;
  const { title, description, img, url } = articleData;
  let match = useRouteMatch();

  const handleNavigation = () => {
    // <Link to={`${match.url}`} />;
  };
  return (
    <div className="article_container">
      <div className="content_container">
        <p id="article_title">{title}</p>
        <p id="article_description">{description}</p>
        <div className="content_readmore_container">
          <button
            type="button"
            id="readmore"
            onClick={() => handleNavigation(url)}
          >
            READ MORE
          </button>
          <MdKeyboardArrowRight className="content_readmore_icon" />
        </div>
      </div>
      <img src={img} alt="article" className="article_img" />
    </div>
  );
};
