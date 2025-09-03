import React from "react";

function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#152A38] shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Blogify AI</h1>
          <div className="flex space-x-6">
            <a href="/" className="text-white hover:text-blue-600">
              Home
            </a>
            <a href="/blogs" className="text-white hover:text-blue-600">
              Blogs
            </a>
            <a href="/about" className="text-white hover:text-blue-600">
              About
            </a>
          </div>
          <div className="space-x-4">
            <a
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
