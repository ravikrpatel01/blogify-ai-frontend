import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    coverImage: null,
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("coverImage", formData.coverImage);
    data.append("title", formData.title);
    data.append("body", formData.body);

    fetch("/blog", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Blog added successfully!");
        console.log(result);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[90vh] bg-white flex items-center justify-center p-5">
        <div className="w-full max-w-2xl bg-[#D3D5FD] shadow-lg border border-gray-400 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-black mb-3">
            Add New Blog
          </h2>
            <hr className="text-gray-400" />
          <form onSubmit={handleSubmit} className="space-y-5 mt-3">
            {/* Cover Image */}
            <div>
              <label
                htmlFor="coverImage"
                className="block text-sm font-medium text-black mb-1"
              >
                Cover Image
              </label>
              <input
                type="file"
                name="coverImage"
                id="coverImage"
                onChange={handleChange}
                className="block text-sm text-black cursor-pointer"
              />
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-black mb-1"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full px-3 py-2 text-black border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Body */}
            <div>
              <label
                htmlFor="body"
                className="block text-sm font-medium text-black mb-1"
              >
                Body
              </label>
              <textarea
                name="body"
                id="body"
                rows="6"
                value={formData.body}
                onChange={handleChange}
                placeholder="Write your blog content..."
                className="w-full text-black px-3 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              Add Blog
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
