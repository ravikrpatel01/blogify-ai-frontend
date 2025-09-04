import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BLOGIFY_API } from "../utils/constants";

export default function AddBlog() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [formData, setFormData] = useState({
    coverImage: null,
    title: "",
    content: "",
  });

  // Handle file selection
  const handleChanges = (e) => {
    setSelectedFile(e.target.files[0]);
    setFormData((prev) => ({
      ...prev,
      coverImage: e.target.files[0],
    }));
  };

  // Handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("image", formData.coverImage);

      const token = localStorage.getItem("token");

      const response = await axios.post(BLOGIFY_API.ADD_BLOG, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Blog added successfully!");
      console.log("Blog Response:", response.data);

      setFormData({
        coverImage: null,
        title: "",
        content: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[110vh] bg-white flex items-center justify-center p-5">
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
                Upload Cover Image
              </label>
              <div className="flex items-center">
                {/* Hidden native input */}
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleChanges}
                  className="hidden"
                />

                {/* Custom button */}
                <label
                  htmlFor="coverImage"
                  className="px-3 py-0 bg-[#F3F3F3] text-black rounded-sm border border-gray-400 cursor-pointer hover:bg-gray-200"
                >
                  Choose File
                </label>

                {/* File name preview */}
                <span className="ml-3 text-sm text-gray-600">
                  {selectedFile ? selectedFile.name : "No file chosen"}
                </span>
              </div>
              <p className="mt-1 ml-1 text-xs text-gray-800">
                PNG, JPG, or JPEG (Max: 5MB)
              </p>
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
                htmlFor="content"
                className="block text-sm font-medium text-black mb-1"
              >
                Body
              </label>
              <textarea
                name="content"
                id="content"
                rows="6"
                value={formData.content}
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
