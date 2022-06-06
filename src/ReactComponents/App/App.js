import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";

import Error from "../pages/Error/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
