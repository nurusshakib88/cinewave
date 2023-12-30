import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Moved the fetchDataFromApi and the API configuration logic into the useEffect.
    const fetchApiConfig = async () => {
      try {
        const res = await fetchDataFromApi("/configuration");
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      } catch (error) {
        console.error("Error fetching API configuration:", error);
      }
    };

    // Call the API configuration function inside useEffect.
    fetchApiConfig();

    // Call the genres function inside useEffect.
    genresCall();
  }, []); // Pass an empty dependency array to run this effect only once on mount.

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    try {
      const data = await Promise.all(promises);

      data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
      });

      dispatch(getGenres(allGenres));
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/search/:mediatype" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
