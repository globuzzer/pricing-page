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
      className="auxservice_container"
      onClick={() => handleNavigation(link)}
    >
      <div className="aux_logo_container">
        <img src={logo} alt="logo" className="aux_logo" />
      </div>
      <div className="auxservice_bottom_container">
        <p id="find_jobs">{name}</p>
        <p className="aux_des">{des}</p>
      </div>
    </button>
  );
};
