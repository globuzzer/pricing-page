import React, {useState} from "react";
import "./style.css";
import {Header} from "./components/Header/Header";
import {SectionHeader} from "../../components/SectionHeader/SectionHeader";
import ico0 from "../../assets/OwnCitySection/Why_GB_0.svg";
import ico1 from "../../assets/OwnCitySection/Why_GB_1.svg";
import ico2 from "../../assets/OwnCitySection/Why_GB_2.svg";
import ico3 from "../../assets/OwnCitySection/Why_GB_3.svg";
import map from "../../assets/OwnCitySection/map.svg";
import {GetWindowDimension} from "../../utils/GetWindowDimension";
import {Footer} from "../../components/Footer/Footer";
import {Journey} from "./components/Journey/Journey";
import {NavBar} from "./components/NavBar/NavBar";
import {GetStarted} from "./components/GetStarted/GetStarted";

const OwnCitySection = () => {
    const {width} = GetWindowDimension();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <NavBar setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
            <Header />
            <section className="section_how_it_work">
                <SectionHeader header="How it works" />
                <div className="own_how_it_work_maincontainer">
                    <div className="own_how_it_work_container">
                        <div className="own_how_it_work_number">1</div>
                        <p id="own_how_it_work_title">Lorem ipsum dolor sit amet</p>
                        <p id="own_how_it_work_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                    <div className="own_how_it_work_container">
                        <div className="own_how_it_work_number">2</div>
                        <p id="own_how_it_work_title">Lorem ipsum dolor sit amet</p>
                        <p id="own_how_it_work_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                    <div className="own_how_it_work_container">
                        <div className="own_how_it_work_number">3</div>
                        <p id="own_how_it_work_title">Lorem ipsum dolor sit amet</p>
                        <p id="own_how_it_work_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.{" "}
                        </p>
                    </div>
                </div>
            </section>
            <section className="section_why_GB">
                <SectionHeader header="Why Globuzzer?" />
                <p id="why_GB_des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
                {width >= 1100 && <div className="why_divider" />}
                <div className="why_GB_grid">
                    <div className="why_GB_item_container">
                        <img src={ico0} alt="why_icon" className="why_GB_item_icon" />
                        <div className="why_GB_item_text_container">
                            <p id="why_GB_item_text_title">Lorem ipsum dolor sit amet</p>
                            <p id="why_GB_item_text_des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="why_GB_item_container">
                        <img src={ico1} alt="why_icon" className="why_GB_item_icon" />
                        <div className="why_GB_item_text_container">
                            <p id="why_GB_item_text_title">Lorem ipsum dolor sit amet</p>
                            <p id="why_GB_item_text_des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="why_GB_item_container">
                        <img src={ico2} alt="why_icon" className="why_GB_item_icon" />
                        <div className="why_GB_item_text_container">
                            <p id="why_GB_item_text_title">Lorem ipsum dolor sit amet</p>
                            <p id="why_GB_item_text_des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="why_GB_item_container">
                        <img src={ico3} alt="why_icon" className="why_GB_item_icon" />
                        <div className="why_GB_item_text_container">
                            <p id="why_GB_item_text_title">Lorem ipsum dolor sit amet</p>
                            <p id="why_GB_item_text_des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_GB">
                <div className="GB_text_container">
                    <p id="GB_title">WHO WE ARE</p>
                    <p id="GB_des">
                        Globuzzer is an award winning global network that was founded in 2006, built by a diverse
                        community of highly skilled travel enthusiasts.
                        <br /> <br /> Our purpose is to connect and guide millions of users around the world. We host
                        travel websites and offer the possibility to locals, expats, and travelers to share their
                        experiences.
                        <br /> <br /> Trusted by thousands of people every year, we provide a reliable platform that
                        offers guidance when moving to a new place or going abroad. We have everything from booking
                        flights to reading informative destination guides and tips.
                    </p>
                </div>
                <img src={map} alt="map" id="GB_map" />
            </section>
            <Journey />
            <Footer />
            <GetStarted modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </>
    );
};
export default OwnCitySection;
