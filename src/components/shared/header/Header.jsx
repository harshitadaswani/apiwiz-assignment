import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar">
      <h1>React Blog App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/createBlog">Create Blog</Link>
      </div>
    </nav>
  );
};
