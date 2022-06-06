import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Gallery />
    </div>
  );
}
