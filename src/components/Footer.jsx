// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B2E4A] text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h5 className="text-xl font-semibold mb-3 text-white">About Blogify AI</h5>
            <p>
              Blogify AI is a platform where you can share your thoughts, explore
              new ideas, and engage with the global blogging community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-3 text-white">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/blog/add-new" className="hover:text-white transition">Add Blog</a>
              </li>
              {/* You can conditionally render based on auth state */}
              <li>
                <a href="/signup" className="hover:text-white transition">Sign Up</a>
              </li>
              <li>
                <a href="/login" className="hover:text-white transition">Sign In</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-xl font-semibold mb-3 text-white">Contact Us</h5>
            <p>Email: support@blogify.com</p>
            <p>Phone: +91-68XXXX0145</p>
            <div className="flex space-x-4 mt-3 text-gray-400">
              <a href="#" className="hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Blogify AI | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
