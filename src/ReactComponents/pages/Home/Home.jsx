import Thumb from "../../components/Thumb/Thumb";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ countries, handleChange, toSearch }) {
  countries.sort((a, b) => {
    let nameA = a.name.official.toUpperCase();
    let nameB = b.name.official.toUpperCase();

    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return (
    <div className="home">
      <div className="loader">
        <ul className="radar">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="up"></div>
      <Header />
      <div className="filters">
        <input
          type="search"
          placeholder=" &#x1F50D; search for a country"
          name="searchTerm"
          value={toSearch.searchTerm}
          onChange={handleChange}
        />
        <div className="label">
          <label htmlFor="selectedRegion">
            <select
              name="selectedRegion"
              value={toSearch.selectedRegion}
              onChange={handleChange}
            >
              <option value="all">Filter by Region </option>
              <option value="all">All Regions</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
        </div>
      </div>
      <div className="gallery">
        {countries.length >= 1 || toSearch.selectedRegion === "all"
          ? countries.map((country) => {
              return <Thumb key={country.name.official} country={country} />;
            })
          : "No countries found"}
      </div>
      <Link
        to={"/"}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <button className="homeBtn1">&#x1F199;</button>
      </Link>
      <Link
        to={"/"}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <button className="homeBtn2">&#x1F199;</button>
      </Link>
    </div>
  );
}
