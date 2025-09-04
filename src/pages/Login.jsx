import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BLOGIFY_API } from "../utils/constants";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(BLOGIFY_API.LOGIN, {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/")
    } catch (err) {
      console.error("Login failed: ", err);
      alert("Invalid username or password!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-[90vh] flex items-center justify-center bg-[#DBD8E3]">
        <div className="w-full h-[350px] max-w-md bg-white px-6 py-5 border  border-gray-400 rounded-2xl shadow-lg">
          <h2 className="text-2xl text-blue-600 font-bold text-center mb-2">
            Login
          </h2>
          <hr className="text-gray-500" />
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full my-1 px-2 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full my-1 px-2 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
