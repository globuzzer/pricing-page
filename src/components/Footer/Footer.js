import React from "react";
import {
  FaPlayCircle,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../../assets/Footer/globuzzer_logo.png";
import { GetWindowDimension } from "../../utils/GetWindowDimension";
import "./style.css";

const mapLink = `https://www.google.com/maps/place/Back%C3%A4ngsv%C3%A4gen+24,+192+73+Sollentuna/@59.4576364,17.
8907952,17z/data=!3m1!4b1!4m5!3m4!1s0x465f98b09703d6db:0x75988cff7b409cd4!8m2!3d59.4576337!4d17.8929839?shorturl=1`;
export const Footer = () => {
  const { width } = GetWindowDimension();
  const FooterDesktop = () => (
    <footer id="main_footer">
      <img src={logo} alt="logo" className="footer-logo" />
      <div className="footer-content">
        <div className="footer-content-column">
          <a href={mapLink} target="_blank" rel="noopener noreferrer">
            Backängsvägen 24 <br />
            192 73 Sollentuna, Sweden
          </a>
          <a href="tel:+46 73 555 5 134">+46 73 555 5 134</a>
          <a
            href="mailto:info@globuzzer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@globuzzer.com
          </a>
        </div>
        <div className="footer-content-column">
          <a href="/#section_newcity">Destination</a>

          <a href="/#featured_articles">Articles</a>
          <a href="/#aux_services">Services</a>
          <div id="buffer" />
        </div>
        <div className="footer-content-column">
          <a href="https://www.mightynetworks.com/terms-of-use">
            Terms & Conditions{" "}
          </a>
          <a href="https://www.mightynetworks.com/privacy-policy">
            {" "}
            Privacy Policy
          </a>
        </div>
        <div className="footer-content-column">
          <a href="../../pages/Home.js" id="footer-follow">
            FOLLOW US
          </a>
          <div className="footer-content-icon-container">
            <a
              className="footer_icons_container"
              href="https://www.facebook.com/Globuzzer/"
            >
              <FaFacebookF className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://twitter.com/globuzzer"
            >
              <FaTwitter className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://www.pinterest.se/globuzzer/"
            >
              <FaPinterestP className="footer_icons" />
            </a>
          </div>
          <div className="footer-content-icon-container">
            <a
              className="footer_icons_container"
              href="https://www.youtube.com/channel/UC4u8N-QBDMWG6OqzSni8clw"
            >
              <FaPlayCircle className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://www.linkedin.com/company/globuzzer/"
            >
              <FaLinkedinIn className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://www.instagram.com/globuzzer/"
            >
              <FaInstagram className="footer_icons" />
            </a>
          </div>
        </div>
      </div>
      <p id="footer-copyright">© 2020 Globuzzer. All rights reserved</p>
    </footer>
  );
  const FooterMobile = () => (
    <footer>
      <img src={logo} alt="logo" className="footer-logo" />
      <div className="footer-content">
        <div className="footer-content-column">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            Backängsvägen 24 <br />
            192 73 Sollentuna, Sweden
          </a>
          <a href="tel:+46 73 555 5 134">+46 73 555 5 134</a>
          <a
            href="mailto:info@globuzzer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@globuzzer.com
          </a>
        </div>
        <div className="footer-content-column">
          <div className="footer-content-icon-container">
            <a
              className="footer_icons_container"
              href="https://www.facebook.com/SocialNetworkforStudentsandExpats/"
            >
              <FaFacebookF className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://twitter.com/globuzzer"
            >
              <FaTwitter className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://www.pinterest.se/globuzzer/"
            >
              <FaPinterestP className="footer_icons" />
            </a>
          </div>
          <div className="footer-content-icon-container">
            <a
              className="footer_icons_container"
              href="https://www.youtube.com/channel/UC4u8N-QBDMWG6OqzSni8clw"
            >
              <FaPlayCircle className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://www.linkedin.com/company/globuzzer/"
            >
              <FaLinkedinIn className="footer_icons" />
            </a>
            <a
              className="footer_icons_container"
              href="https://www.instagram.com/globuzzer/"
            >
              <FaInstagram className="footer_icons" />
            </a>
          </div>
        </div>
      </div>
      <p id="footer-copyright">© 2020 Globuzzer. All rights reserved</p>
    </footer>
  );
  return <>{width > 1100 ? <FooterDesktop /> : <FooterMobile />}</>;
};
