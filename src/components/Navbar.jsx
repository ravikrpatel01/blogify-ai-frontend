import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);

    window.location.href = "/";
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#152A38] shadow-md fixed w-full">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Blogify AI
          </Link>

          {/* Center Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-blue-600">
              Home
            </Link>
            <Link to="/blogs" className="text-white hover:text-blue-600">
              Blogs
            </Link>
            <Link to="/about" className="text-white hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Right Side */}
          <div className="space-x-4 flex items-center">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <div className="w-[40px] h-[40px]">
                    <img
                      height={50}
                      className="rounded-full object-cover w-full h-full"
                      src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_incoming&w=740&q=80"
                      alt="Profile"
                    />
                  </div>
                  <span className="text-white font-medium">
                    {user.fullName || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-red-700 text-white rounded-sm hover:bg-red-500 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
