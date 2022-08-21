import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 Error</h2>
      <p>We canot find that page!</p>
      <Link to="/" className="link">
        Take me back to the Home Page
      </Link>
    </div>
  );
};
