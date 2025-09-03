import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] h-[50vh] flex items-center justify-center bg-[#DBD8E3]">
        <div className="w-[1000px] h-[65vh] max-w-md bg-white px-8 py-5 rounded-2xl border border-gray-400 shadow-lg">
          <h2 className="text-2xl text-emerald-600 font-bold text-center mb-2">
            Create An Account
          </h2>
          <hr className="text-gray-500" />
          <form className="space-y-1 mt-4">
            <div className="">
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                className="w-full my-1 px-2 py-2 border rounded-lg focus:ring focus:ring-green-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full my-1 px-2 py-2 border rounded-lg focus:ring focus:ring-green-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full my-1 px-2 py-2 border rounded-lg focus:ring focus:ring-green-300"
                placeholder="Create a password"
              />
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="" className="ml-2">
                I agree to the{" "}
                <a
                  className="text-blue-900 font-medium hover:underline"
                  href=""
                >
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 mt-4 cursor-pointer rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
