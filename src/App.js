import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import "./App.css";
import Search from "./Search";
import ProfileDetails from "./ProfileDetails";



function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">💍 Matrimony</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
        </Routes>



        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} Matrimony App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
