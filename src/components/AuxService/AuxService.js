import React from "react";
import "./style.css";

export const AuxService = (props) => {
    const {AuxData} = props;
    const {logo, link, des, name} = AuxData;
    const navigateTo = (url) => {
        window.location.href = `${url}`;
    };
    return (
        <button type="button" className="auxservice_container" onClick={() => navigateTo(link)}>
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
