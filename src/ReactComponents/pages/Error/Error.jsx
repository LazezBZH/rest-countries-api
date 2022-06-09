import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Oups it seems there is a problem!</h1>
      <Link to="/"></Link>
    </div>
  );
}

export default Error;
