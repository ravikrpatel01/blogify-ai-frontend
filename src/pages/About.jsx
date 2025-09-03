import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Welcome to{" "}
            <span className="font-semibold">AI Blogging Platform</span>, where
            creativity meets technology. Our mission is to empower writers with
            AI-powered tools to craft and share ideas seamlessly.
          </p>
        </section>

        {/* Intro Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About"
            className="rounded-2xl shadow-lg w-1/3"
          />
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 text-xl">
              We are a passionate team of developers, designers, and
              storytellers building a platform that helps people express their
              thoughts with the power of AI. From generating ideas to polishing
              final drafts, we make content creation effortless.
            </p>
            <p className="text-gray-600 text-xl">
              Our AI integration ensures your blogs are engaging, SEO-friendly,
              and tailored to your audience.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 bg-white px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-indigo-50 rounded-2xl p-8 shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To revolutionize the blogging experience by combining human
                creativity with the latest advancements in Artificial
                Intelligence. We aim to make content creation fast, smart, and
                enjoyable.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 shadow">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the leading AI-integrated blogging platform where
                millions of voices are heard, stories are shared, and knowledge
                spreads without barriers.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${
                    member + 20
                  }.jpg`}
                  alt="Team member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Team Member {member}
                </h3>
                <p className="text-sm text-gray-500">Full Stack Developer</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
