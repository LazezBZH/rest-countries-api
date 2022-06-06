import GetAll from "../../../utils/getApi";
import { useEffect, useState } from "react";
import Thumb from "../Thumb/Thumb";
import "./Gallery.css";

export default function Gallery() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    function getLands() {
      const data = new GetAll();
      data.getLands().then((data) => setLands(data));
    }
    getLands();
  }, []);

  return (
    <div className="gallery_container">
      <div className="gallery">
        {lands.map((item) => (
          <article key={`thumb-${item.name.official}`} className="thumbs">
            <Thumb
              name={item.name.official}
              population={item.population}
              region={item.region}
              capital={item.capital}
              src={item.flags.svg}
            />
          </article>
        ))}
      </div>
    </div>
  );
}
