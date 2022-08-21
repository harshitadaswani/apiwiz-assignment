import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const format = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "image",
    "video",
    "clean",
  ];
  const toolbar = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    ["clean"],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, image };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
    });
  };
  return (
    <div className="create-blog">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blog-title">Blog Title</label>
        <input
          type="text"
          id="blog-title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="blog-image">Blog Image</label>
        <input
          type="file"
          id="blog-image"
          required
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          accept="image/png, image/jpeg"
        />
        <label htmlFor="blog-body">Blog Body</label>
        <ReactQuill
          theme="snow"
          formats={format}
          modules={{ toolbar }}
          value={body}
          onChange={(e) => {
            setBody(e);
          }}
        />
        <label htmlFor="blog-author">Blog Author</label>
        <input
          type="text"
          id="blog-author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};
