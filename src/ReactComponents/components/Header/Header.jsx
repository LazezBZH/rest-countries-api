import "./Header.css";
import ToggleButton from "../ToggleButton/ToggleButton";

const Header = () => {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <ToggleButton />
    </header>
  );
};

export default Header;
