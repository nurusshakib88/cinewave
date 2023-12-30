import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/cinewave.png";
import "./Header.scss";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("explore/movie");
    } else {
      navigate("explore/tv");
    }
  };

  return (
    <header>
      <ContentWrapper>
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <div className="menu">
          <ul>
            <li onClick={() => navigationHandler("movie")}>Movies</li>
            <li onClick={() => navigationHandler("tv")}>Tv Shows</li>
          </ul>
        </div>

        <div className="searchBar">
          <HiOutlineSearch />

          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
          />
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
