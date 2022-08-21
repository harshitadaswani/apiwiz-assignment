import React from "react";
import { Bloglist } from "../../components";
import { useFetch } from "../../hooks/useFetch";

export const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <Bloglist blogs={blogs} title="All Blogs" />
    </div>
  );
};
