import React from "react";
import { Routes, Route } from "react-router-dom";
import { BlogDetails, CreateBlog, Home, NotFound } from "../pages";

export const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
