import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import BlogDetailsPage from "./pages/BlogDetailsPage"
import AddBlog from "./pages/AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path="/create" element={<AddBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
