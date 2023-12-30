import React from "react";
import "./Footer.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Mylogo from "../../assets/cinewave.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} `;

  return (
    <div className="footer">
      <ContentWrapper>
        <div className="logo">
          <img src={Mylogo} alt="cinewave" />
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          voluptatem dignissimos laborum illo commodi animi consectetur nam vel
          quia saepe ut quasi natus laudantium id harum? Reprehenderit quo
          molestias maiores.
        </p>

        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

        <div className="copyright">
          <p>
            © {currentYear} <NavLink to="/">CINEWAVE</NavLink> All Rights
            Reserved
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
