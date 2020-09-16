import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import "./style.css";

export const AuxService = (props) => {
  const { AuxData } = props;
  const { logo, link, des, name } = AuxData;
  let match = useRouteMatch();
  const handleNavigation = () => {
    <Link to={`${match.url}`} />;
  };
  return (
    <button
      type="button"
      className="auxservice-container"
      onClick={() => handleNavigation(link)}
    >
      <div className="aux-logo-container">
        <img src={logo} alt="logo" className="aux-logo" />
      </div>
      <div className="auxservice-bottom-container">
        <p id="find-jobs">{name}</p>
        <p className="aux-des">{des}</p>
      </div>
    </button>
  );
};
