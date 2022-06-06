import "./Thumb.css";

export default function Thumb({ name, region, population, capital, src }) {
  return (
    <figure className="thumb">
      <img src={src} alt={name} />
      <figcaption>
        <h2>{name}</h2>
        <p className="population">
          <span className="p_bold">Population: </span>
          {population}
        </p>
        <p className="region">
          <span className="p_bold">Region: </span> {region}{" "}
        </p>
        <p className="capital">
          <span className="p_bold">Capital: </span> {capital}{" "}
        </p>
      </figcaption>
    </figure>
  );
}
