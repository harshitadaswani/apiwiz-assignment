import React from "react";
import { Link } from "react-router-dom";

export const Bloglist = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <div className="flex">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <img src={blog.image} alt="blog-banner" className="blog-image" />
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
