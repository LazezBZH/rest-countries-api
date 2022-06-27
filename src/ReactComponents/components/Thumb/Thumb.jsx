import "./Thumb.css";
import { Link } from "react-router-dom";

export default function Thumb({ country }) {
  return (
    <Link
      to={"/" + country.cca3}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <figure className="thumb">
        <img
          className="thumb_img"
          src={country.flags.svg}
          alt={country.name.official + "'s Flag  "}
        />
        <figcaption>
          <h2>{country.name.official}</h2>
          <p className="population">
            <span className="p_bold">Population: </span>
            {country.population}
          </p>
          <p className="region">
            <span className="p_bold">Region: </span> {country.region}
          </p>
          <p className="capital">
            <span className="p_bold">
              {country.capital && country.capital.length > 1
                ? "Capitals"
                : "Capital"}
              :{" "}
            </span>
            {country.capital ? country.capital.join(", ") : "None"}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
}
