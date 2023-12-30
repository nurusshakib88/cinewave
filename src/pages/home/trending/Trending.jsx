import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./Trending.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <h1>Trending</h1>
        <SwitchTabs data={["day", "week"]} onTabChange={onTabChange} />
      </ContentWrapper>

      <ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
