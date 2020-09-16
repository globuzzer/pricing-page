import React, { useState, useRef } from "react";
import "./style.css";

import { AiFillStar } from "react-icons/ai";
import { Slide } from "react-slideshow-image";
import { GetWindowDimension } from "../../utils/GetWindowDimension";
import { PricingHeader } from "./components/PricingHeader/PricingHeader";
import header1D from "../../assets/Pricing/Pricing_header_desktop_1.svg";
import header2D from "../../assets/Pricing/Pricing_header_desktop_2.svg";
import header3D from "../../assets/Pricing/slider-image-map.svg";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { PricingPlan } from "./components/PricingPlan/PricingPlan";
import { OwnSection } from "../../components/OwnSection/OwnSection";
import { Footer } from "../../components/Footer/Footer";
import globe from "../../assets/Pricing/Pricing_globe_1.svg";
import { MemberNearYou } from "../../components/MemberNearYou/MemberNearYou";
import MemberNearYou from "../../Data/MemberNearYouData";
import { PricingWhyContent } from "./components/PricingWhyContent/PricingWhyContent";
import pricingExtraServices from "../../Data/PricingExtraServicesData";
import { PricingExtraService } from "./components/PricingExtraService/PricingExtraService";
import { PricingReview } from "./components/PricingReview/PricingReview";
import ReviewData from "../../Data/ReviewData";
import pricingPackages from "../../Data/PricingPackagesData";
import { PricingContactUs } from "./components/PricingContactUs/PricingContactUs";
import { PricingGetStarted } from "./components/PricingGetStarted/PricingGetStarted";
import { PricingExtraServiceChoose } from "./components/PricingExtraServiceChoose/PricingExtraServiceChoose";
import one from "../../assets/Pricing/one.png";
import two from "../../assets/Pricing/one1.png";
import three from "../../assets/Pricing/one2.png";

const why = [one, two, three];
const slideImages = [header1D, header2D, header3D];
export const Pricing = () => {
  const { width } = GetWindowDimension();
  const [contactModal, setContactModal] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [plan, setPlan] = useState(0);
  const [extraModal, setExtraModal] = useState(false);
  const [extraPlan, setExtraPlan] = useState(0);
  const [active, setActive] = useState(0);
  const slideRef = useRef();
  const goto = (index) => {
    slideRef.current.goTo(index);
  };

  return (
    <>
      <PricingHeader width={width} setContactModal={setContactModal} />
      <section className="section_know_service">
        <div className="know_service_text_container">
          <p id="know_service_title">Why advertise with Globuzzer?</p>
          <div className="know_service_container">
            <button
              type="button"
              className="know_service_block_container"
              onClick={() => {
                goto(0);
                setActive(0);
              }}
            >
              <AiFillStar
                className="know_service_block_icon"
                style={{ color: active === 0 && "#E1586D" }}
              />
              <p
                className="know_service_block_text"
                style={{
                  color: active === 0 && "#E1586D",
                  fontWeight: active === 0 && "bold",
                }}
              >
                Increase your brand’s visibility
              </p>
            </button>
            <button
              type="button"
              className="know_service_block_container"
              onClick={() => {
                goto(1);
                setActive(1);
              }}
            >
              <AiFillStar
                className="know_service_block_icon"
                style={{ color: active === 1 && "#E1586D" }}
              />
              <p
                className="know_service_block_text"
                style={{
                  color: active === 1 && "#E1586D",
                  fontWeight: active === 1 && "bold",
                }}
              >
                Generate traffic and leads
              </p>
            </button>
            <button
              type="button"
              className="know_service_block_container"
              onClick={() => {
                goto(2);
                setActive(2);
              }}
            >
              <AiFillStar
                className="know_service_block_icon"
                style={{ color: active === 2 && "#E1586D" }}
              />
              <p
                className="know_service_block_text"
                style={{
                  color: active === 2 && "#E1586D",
                  fontWeight: active === 2 && "bold",
                }}
              >
                Reach locals and expats
              </p>
            </button>
          </div>
        </div>
        <div className="slide-container">
          <Slide
            indicators
            infinite
            arrows={false}
            duration={10000}
            ref={slideRef}
            onChange={() => {
              const newIndex = active + 1;
              active === 2 ? setActive(0) : setActive(newIndex);
            }}
          >
            {slideImages.map((image, index) => (
              <div className="each-slide" key={index}>
                <img src={image} alt="header" className="slide_img" />
              </div>
            ))}
          </Slide>
        </div>
      </section>
      <section className="section_pricing_plans" id="our_plans">
        <SectionHeader header="Choose your plan" />
        <p id="pricing_plans_des">
          Our plans are tailored to fit any brand or business. Select the plan
          that best suits your needs.
        </p>
        <div className="pricing_plans_grid">
          {pricingPackages.map((pricingPackage, index) => (
            <PricingPlan
              key={index}
              pricingPackage={pricingPackage}
              width={width}
              setStartModal={setStartModal}
              index={index}
              setPlan={setPlan}
            />
          ))}
        </div>
      </section>
      <section className="section_why">
        <SectionHeader header="Why Globuzzer Network?" />
        <div className="pricing_why">
          <div className="pricing_why_reason">
            <img src={globe} alt="globe" className="pricing_why_globe" />
            <p className="pricing_why_text" id="text_globe">
              <span className="pricing_why_text_em">18 </span> City sections and
              growing
            </p>
          </div>
          <div className="pricing_why_reason">
            <div className="pricing_why_reason_member_grid">
              {MemberNearYou.map((memberData, index) => (
                <MemberNearYou memberData={memberData} key={index} />
              ))}
            </div>
            <p className="pricing_why_text" id="text_member">
              <span className="pricing_why_text_em">&nbsp;32K </span> Users in
              our network
            </p>
          </div>
          <div className="pricing_why_reason">
            <div className="temp_pricing_content">
              {why.map((content, index) => (
                <PricingWhyContent content={content} key={index} />
              ))}
            </div>

            <p className="pricing_why_text" id="text_member">
              <span className="pricing_why_text_em">180K </span> In social media
              reach
            </p>
          </div>
        </div>
      </section>
      <section className="section_extra_service">
        <SectionHeader header="Available services at Globuzzer" />
        <div className="pricing_extra_service_grid">
          {pricingExtraServices.map((pricingExtraService, index) => (
            <PricingExtraService
              pricingExtraService={pricingExtraService}
              key={index}
              setExtraPlan={setExtraPlan}
              setExtraModal={setExtraModal}
              index={index}
            />
          ))}
        </div>
      </section>
      <section className="section_pricing_review">
        <SectionHeader header="Our partners" />
        <div className="review_slide_container">
          <Slide infinite arrows duration={5000}>
            {ReviewData.map((review, index) => (
              <PricingReview review={review} key={index} />
            ))}
          </Slide>
        </div>
      </section>
      <OwnSection />
      <Footer />
      <PricingContactUs
        contactModal={contactModal}
        setContactModal={setContactModal}
      />
      <PricingGetStarted
        startModal={startModal}
        setStartModal={setStartModal}
        plan={plan}
      />
      <PricingExtraServiceChoose
        extraModal={extraModal}
        extraPlan={extraPlan}
        setExtraModal={setExtraModal}
        setExtraPlan={setExtraPlan}
      />
    </>
  );
};
