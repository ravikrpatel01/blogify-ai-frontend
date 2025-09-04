import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  // Dummy blogs data
  const [blogs] = useState([
    {
      id: 1,
      title: "How AI is Transforming Blogging",
      content:
        "Artificial Intelligence is revolutionizing the way content is written, optimized, and consumed. With summarization and recommendations...",
      createdAt: "2025-09-01",
    },
    {
      id: 2,
      title: "Top 5 Spring Boot Best Practices",
      content:
        "Spring Boot has become the go-to framework for building Java backends. Here are some of the best practices like layered architecture...",
      createdAt: "2025-08-28",
    },
    {
      id: 3,
      title: "React 19 New Features You Must Know",
      content:
        "React 19 introduces exciting updates like Server Components, Actions, and Suspense improvements. Let's explore how they can help developers...",
      createdAt: "2025-08-20",
    },
  ]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#DBD8E3] flex flex-col">
      <Navbar />
      <section className="flex px-10 py-8 mt-[70px]">
        <div className="w-1/2 py-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-700">
              Explore Our Latest Blogs
            </h2>
            <p className="text-lg mt-3 text-gray-600">
              Stay updated with the latest insights, stories, and news. Dive
              into our articles below.
            </p>
          </div>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 w-[400px] rounded-l-sm"
            />
            <button className="px-5 border py-2 bg-blue-500 text-white border-black rounded-r-sm cursor-pointer">
              Search
            </button>
          </div>
          <div className="mt-2 text-[1.1rem] text-gray-500">
            <ul className="list-disc list-inside">
              <li>
                Type keywords like{" "}
                <span className="font-bold text-gray-600">AI</span>,{" "}
                <span className="font-bold text-gray-600">React</span>, or{" "}
                <span className="font-bold text-gray-600">Spring Boot</span> to
                find relevant blogs.
              </li>
              {/* <li>
                Discover articles tailored to your interests — start typing to
                explore!
              </li> */}
              <li>
                Join thousands of readers exploring the latest trends in tech &
                blogging.
              </li>
            </ul>
            {user ? (
              <>
                <p className="text-gray-700 mt-5 mb-3">
                  Share your thoughts, ideas, and knowledge with the world.
                  Start your journey today and
                  inspire others with your words.
                </p>
                <div>
                  <Link to="/create" className="bg-blue-500 mr-3 text-amber-50 py-1.5 px-3 rounded-sm border cursor-pointer border-amber-50 text-[1rem]">
                    Start Writing
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="mt-8 text-xl text-gray-700 font-bold">
                  Create an account OR Login to start writing your own blogs! ✨
                </p>
                <div className="mt-4">
                  <a
                    href="/signup"
                    className="bg-blue-500 mr-3 text-amber-50 py-1.5 px-3 rounded-sm border cursor-pointer border-amber-50 text-[1rem]"
                  >
                    Create your Account
                  </a>
                  OR
                  <a
                    href="/login"
                    className="bg-blue-500 ml-3 text-amber-50 py-1.5 px-3 rounded-sm border cursor-pointer border-amber-50 text-[1rem]"
                  >
                    Sign In
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-1/2">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl"
            src="./blog_video.mp4"
          ></video>
        </div>
      </section>
      {/* Hero Section */}
      <header className="bg-blue-50 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Share Your Thoughts, Powered by AI ✨
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Write, read, and explore blogs. Get AI-powered summaries & topic
          suggestions.
        </p>
        <a
          href="/create"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700"
        >
          Start Writing
        </a>
      </header>

      {/* Blog Cards */}
      <main className="container mx-auto px-6 py-12 flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Latest Blogs</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h4>
                <p className="text-gray-600 line-clamp-3">
                  {blog.content.substring(0, 120)}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={`/blogs/${blog.id}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                  <span className="text-sm text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
