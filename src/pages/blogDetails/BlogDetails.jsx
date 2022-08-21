import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article>
        <h2>{blog.title}</h2>
        <img src={blog.image} alt="blog-banner" className="banner-image flex" />
        <p>Written by {blog.author}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: blog.body,
          }}
        ></div>
      </article>
    </div>
  );
};
