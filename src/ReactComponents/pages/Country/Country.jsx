import "./Country.css";
import Header from "../../components/Header/Header";
import { Link, useParams } from "react-router-dom";

export default function Country({ countries }) {
  const { countryCca3 } = useParams();

  const country = countries.find((country) => country.cca3 === countryCca3);

  let currencyList = ["none"];

  if (country.currencies) {
    const currencyKeys = Object.keys(country.currencies);
    const currencies = country.currencies;
    currencyList = currencyKeys.map((key) => {
      return `${currencies[key]["name"]} (${currencies[key]["symbol"]})`;
    });
  }

  let languageList = ["none"];

  if (country.languages) {
    const languageKeys = Object.keys(country.languages);
    languageList = languageKeys.map((key) => {
      return `${country.languages[key]}`;
    });
  }
  let borderList = ["none"];

  if (country.borders) {
    const borderKeys = Object.keys(country.borders);
    borderList = borderKeys.map((key) => {
      return `${country.borders[key]}`;
    });
  }
  return (
    <div className="countries">
      <Header />
      <div className="oneCountry">
        <Link to="/">
          <button className="country_btn">&#x21E6; Back</button>
        </Link>
        <div className="country_details">
          <div className="country_details-img">
            <img src={country.flags.svg} alt="" />
          </div>

          <div className="country_details-txt">
            <h2>{country.name.official}</h2>
            <div className="country_details-both">
              {" "}
              <div className="country_details-left">
                <p>
                  <span className="country-bold">Common Name: </span>
                  {country.name.common}
                </p>
                <p>
                  <span className="country-bold">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="country-bold">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="country-bold">Sub-Region: </span>
                  {country.subregion ? country.subregion : "None"}
                </p>
                <p>
                  <span className="country-bold">
                    {country.capital && country.capital.length > 1
                      ? "Capitals"
                      : "Capital"}
                    :{" "}
                  </span>
                  {country.capital ? country.capital.join(", ") : "None"}
                </p>
              </div>
              <div className="country_details-right">
                <p>
                  <span className="country-bold">Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span className="country-bold">
                    {currencyList.length > 1 ? "Currencies" : "Currency"}:{" "}
                  </span>
                  {currencyList.join(", ")}
                </p>
                <p>
                  <span className="country-bold">
                    {languageList.length > 1 ? "Languages" : "Language"}:{" "}
                  </span>
                  {languageList.join(", ")}
                </p>
              </div>
            </div>

            <div className="border">
              <p className="country-bold">
                {borderList.length > 1 ? "Border countries" : "Border country"}:
              </p>
              <div className="border_link">
                {country.borders ? (
                  country.borders.map((code) => {
                    const borderLink = countries.find(
                      (country) => country.cca3 === code
                    );
                    return (
                      <p key={borderLink.name.common} className="border_btn">
                        <Link key={code} to={"/" + code}>
                          <span className="font-bold">
                            {borderLink.name.common}
                          </span>
                        </Link>
                      </p>
                    );
                  })
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
