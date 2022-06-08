import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import GetAll from "../../utils/getApi";
import { useEffect, useState } from "react";

import Home from "../pages/Home/Home";
import Country from "../pages/Country/Country";

import Error from "../pages/Error/Error";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [toSearch, setTosearch] = useState({
    searchTerm: "",
    selectedRegion: "all",
  });

  useEffect(() => {
    function getLands() {
      const data = new GetAll();
      data.getLands().then((data) => setCountries(data));
    }
    getLands();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setTosearch((prevTerms) => {
      return {
        ...prevTerms,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (toSearch.selectedRegion === "all") {
      setSelectedCountries(countries);
    } else {
      setSelectedCountries(
        countries.filter(
          (country) =>
            country.region.toLowerCase() ===
            toSearch.selectedRegion.toLowerCase()
        )
      );
    }

    if (toSearch.searchTerm) {
      setSelectedCountries((prevCountries) =>
        prevCountries.filter((country) => {
          const name = country.name.official.toLowerCase();

          const search = toSearch.searchTerm.toLowerCase();

          if (name.startsWith(search)) return true;

          //then filtered from diacritics
          const toFilter = name.split(" ");
          for (let part of toFilter) {
            if (part.startsWith(search)) return true;
          }
          return false;
        })
      );
    }
  }, [toSearch, countries]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                countries={selectedCountries}
                handleChange={handleChange}
                toSearch={toSearch}
              />
            }
          />
          <Route
            path="/:countryCca3"
            element={<Country countries={countries} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
