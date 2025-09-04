// src/pages/Blogs.jsx
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Everyday Life",
    author: "Ravi Kumar",
    date: "Feb 20, 2025",
    image: "https://source.unsplash.com/400x250/?ai+technology",
    description:
      "Artificial Intelligence is transforming industries from healthcare to finance. Explore how AI will shape our daily lives in the next decade.",
  },
  {
    id: 2,
    title: "Getting Started with Spring Boot",
    author: "Neha Sharma",
    date: "Feb 15, 2025",
    image: "https://source.unsplash.com/400x250/?spring+java",
    description:
      "Spring Boot simplifies backend development with Java. Learn the basics of creating REST APIs and connecting to databases.",
  },
  {
    id: 3,
    title: "Mastering React in 2025",
    author: "Amit Verma",
    date: "Feb 10, 2025",
    image: "https://source.unsplash.com/400x250/?react+frontend",
    description:
      "React remains one of the most popular frontend libraries. Discover best practices, hooks, and state management tips.",
  },
  {
    id: 4,
    title: "PostgreSQL vs MySQL: Which One to Choose?",
    author: "Priya Singh",
    date: "Feb 5, 2025",
    image: "https://source.unsplash.com/400x250/?database+postgresql",
    description:
      "Databases are crucial for applications. Compare PostgreSQL and MySQL to find out which one suits your project.",
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    author: "Arjun Gupta",
    date: "Jan 28, 2025",
    image: "https://source.unsplash.com/400x250/?nodejs+api",
    description:
      "Learn how to design and develop scalable REST APIs using Node.js and Express for modern web applications.",
  },
  {
    id: 6,
    title: "The Power of Tailwind CSS",
    author: "Sneha Kapoor",
    date: "Jan 20, 2025",
    image: "https://source.unsplash.com/400x250/?tailwind+css",
    description:
      "Tailwind CSS is revolutionizing frontend design with utility-first classes. Build responsive UI faster than ever.",
  },
  {
    id: 7,
    title: "Why Developers Love TypeScript",
    author: "Vikram Mehta",
    date: "Jan 15, 2025",
    image: "https://source.unsplash.com/400x250/?typescript+programming",
    description:
      "TypeScript brings type safety and better tooling to JavaScript. Discover why it's the preferred choice for large apps.",
  },
  {
    id: 8,
    title: "Microservices with Spring Cloud",
    author: "Ananya Roy",
    date: "Jan 10, 2025",
    image: "https://source.unsplash.com/400x250/?spring+cloud",
    description:
      "Spring Cloud provides tools for building distributed systems. Learn how to implement microservices architecture.",
  },
  {
    id: 9,
    title: "Introduction to Docker & Containers",
    author: "Rahul Yadav",
    date: "Jan 5, 2025",
    image: "https://source.unsplash.com/400x250/?docker+devops",
    description:
      "Containers have changed deployment forever. Understand how Docker works and why developers rely on it.",
  },
  {
    id: 10,
    title: "Exploring Machine Learning with Python",
    author: "Ishita Das",
    date: "Dec 28, 2024",
    image: "https://source.unsplash.com/400x250/?machinelearning+python",
    description:
      "Python is the go-to language for ML. Get started with libraries like TensorFlow, Scikit-learn, and PyTorch.",
  },
];

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 py-5 px-5">
        <h1 className="text-4xl mt-[75px] font-bold text-center text-gray-800 mb-10">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  By {blog.author} • {blog.date}
                </p>
                <p className="text-gray-600 mt-3">{blog.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
