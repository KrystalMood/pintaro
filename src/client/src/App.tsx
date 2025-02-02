import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider } from "@/context/auth";
// import PrivateRoute from "@/components/auth/PrivateRoute";
import NotFound from "@/pages/404";
import Home from "@/pages/home";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import Contact from "@/pages/contact";
import Course from "@/pages/course";
import Settings from "@/pages/settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;