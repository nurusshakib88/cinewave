import React, { useState, useEffect } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./HeroBanner.scss";
import useFetch from "../../../hooks/useFetch";

import BannerDetails from "./bannerDetails/BannerDetails";

const HeroBanner = () => {
  const { data, loading } = useFetch(`/trending/all/day`);
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    if (data?.results && data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setRandomItem(data.results[randomIndex]);
    }
  }, [data]);

  return (
    <div className="heroBanner">
      <ContentWrapper>
        {randomItem && <BannerDetails data={[randomItem]} loading={loading} />}
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
