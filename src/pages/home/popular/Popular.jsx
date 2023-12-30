import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "movie" ? "movie" : "tv");


  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <h1>Popular</h1>
        <SwitchTabs data={["movie", "tv series"]} onTabChange={onTabChange} />
      </ContentWrapper>

      <ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
      </ContentWrapper>
    </div>
  );
};

export default Popular;
