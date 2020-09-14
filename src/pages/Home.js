import React, {useState, useEffect} from "react";
import "../css/Home.css";
import {FiSearch} from "react-icons/fi";
import {MdKeyboardArrowRight} from "react-icons/md";
import LazyLoad from "react-lazyload";
import {HomeValue} from "../components/HomeValue/HomeValue";
import {SectionHeader} from "../components/SectionHeader/SectionHeader";
import {JoinCity} from "../components/JoinCity/JoinCity";
import community from "../assets/Value_community.svg";
import expert from "../assets/Value_expert.svg";
import journey from "../assets/Value_journey.svg";
import mockJoinCity from "../mockData/mockJoinCity";
import mockFeaturedArticles from "../mockData/mockFeatueredArticles";
import mockAuxServices from "../mockData/mockAuxServices";
import {FeaturedArticle} from "../components/FeaturedArticle/FeaturedArticle";
import {AuxService} from "../components/AuxService/AuxService";
import {OwnSection} from "../components/OwnSection/OwnSection";
import {Footer} from "../components/Footer/Footer";
import {SearchCity} from "../components/SearchCity/SearchCity";
import {JoinCommunity} from "../components/JoinCommunity/JoinCommunity";
import {RequestNewCity} from "../components/RequestNewCity/RequestNewCity";

export const Home = () => {
    const [query, setQuery] = useState("");
    const [moreJoinCity, setMoreJoinCity] = useState(false);
    const [joinCity, setJoinCity] = useState(mockJoinCity);
    /* eslint-disable */
    useEffect(() => {
        fetchJoinCityData();
    }, [query, moreJoinCity]);
    /* eslint-enable */

    const fetchJoinCityData = () => {
        const sorted = mockJoinCity.filter((city) => city.name.toLowerCase().includes(query.toLowerCase()));
        moreJoinCity
            ? setJoinCity(
                  sorted.sort((a, b) => {
                      const x = a.name.toLowerCase();
                      const y = b.name.toLowerCase();
                      return x < y ? -1 : x > y ? 1 : 0;
                  })
              )
            : setJoinCity(
                  sorted.slice(0, 11).sort((a, b) => {
                      const x = a.name.toLowerCase();
                      const y = b.name.toLowerCase();
                      return x < y ? -1 : x > y ? 1 : 0;
                  })
              );
    };
    const one = `Globuzzer is a global network that provides the full relocating experience. 
Find topics, join communities, attend events, book flights, and much more. `;
    const two = `Reliable information shared by expats and locals. 
Everything from visa requirements and local documentation to valuable tips.`;
    const three = `We are locals. We are expats. 
We are travelers. We are students. 
Most importantly, we have been in the same spot, and we can support you. `;
    return (
        <>
            <LazyLoad>
                <section className="section_header" id="section_header">
                    <p id="header_1">The global community of locals and expats</p>
                    <p id="header_2">Complete guidance when relocating to a new city</p>
                    <SearchCity />
                    <p id="header_suggestion">
                        Maybe <a href="https://globuzzer.mn.co/groups/195831/feed">Stockholm</a>,
                        <a href="https://globuzzer.mn.co/groups/195832/feed"> Helsinki</a> or{" "}
                        <a href="https://globuzzer.mn.co/groups/195834/feed">Paris</a>?
                    </p>
                </section>
            </LazyLoad>

            <section className="section_value">
                <HomeValue src={community} imgCaption="All-in-one platform" alt="value" imgDescription={one} />
                <HomeValue src={expert} imgCaption="Trustworthy content" alt="value" imgDescription={two} />
                <HomeValue src={journey} imgCaption="Local communities" alt="value" imgDescription={three} />
            </section>
            <section className="section_newcity" id="section_newcity">
                {/* <p id="newcity_p">Move to a new city? </p> */}
                <SectionHeader header="What is your next destination? " />
                <div className="newcity_input">
                    <FiSearch className="search_icon" />
                    <input
                        type="text"
                        placeholder="Find your city"
                        id="newcity_input_city"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </div>
                <div className="joincity_grid">
                    {joinCity.map((cityData, index) => (
                        <JoinCity cityData={cityData} key={index} />
                    ))}
                    {!moreJoinCity && joinCity.length > 0 && (
                        <JoinCity
                            cityData={{name: "Explore more cities"}}
                            isViewMore
                            setMoreJoinCity={setMoreJoinCity}
                        />
                    )}
                    {moreJoinCity && joinCity.length > 0 && <RequestNewCity />}
                </div>
                <div className="no_item">{joinCity.length === 0 && <RequestNewCity />}</div>
            </section>
            <JoinCommunity />
            {/* <section>
                <SectionHeader header="Featured videos" />
                <VideoCarousel />
            </section> */}
            <section className="featured_articles" id="featured_articles">
                <SectionHeader header="Featured articles" />
                {mockFeaturedArticles.map((articleData, index) => (
                    <FeaturedArticle articleData={articleData} key={index} />
                ))}
                <div className="featured_articles_more">
                    <a href="https://globuzzer.mn.co/feed?filters=articles" className="featured_articles_more_anchor">
                        SEE ALL ARTICLES
                    </a>
                    <MdKeyboardArrowRight className="featured_articles_more_icon" />
                </div>
            </section>
            <section className="aux_services" id="aux_services">
                <SectionHeader header="Helpful services" />
                <div className="aux_list">
                    {mockAuxServices.map((AuxData, index) => (
                        <AuxService AuxData={AuxData} key={index} />
                    ))}
                </div>
            </section>
            <OwnSection />
            <Footer />
        </>
    );
};
