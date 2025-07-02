import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css"
// import all page components//
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PostsPage from "./components/PostsPage";
import PostDetailPage from "./components/PostDetailPage";

// navigation component -this appears on every page//
function Navigation() {
// useLocation gives user info about the current URL//
const location = useLocation();
return (
  <nav className="navigation">
    <div className="nav-container">
      {/* logo/brand */}
      <Link to="/" className="nav-logo"> 
      🌟My Blog App
      </Link>

      {/* navigation links */}
      <div className="nav-links">
        <Link
         to="/"
         className={`nav-link ${location.pathname === "/"?"active":""}`}
         >
          🏠Home
         </Link>

         <Link
          to="/about"
          className={`nav-link ${location.pathname === '/about'?'active':''}`}
          >
           📋 About 
          </Link>

          <Link
           to="/posts"
           className={`nav-link ${location.pathname.startsWith('/posts')?'active':''}`}
           >
            📝Posts
           </Link>
      </div>
    </div>
  </nav>
);
}

// footer component-appears at the bottom of every page//
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          🎓built with react router
        </p>
        <p className="footer-subtext">
          Learning multi-page applications with react router DOM
        </p>
      </div>
    </footer>
  );
}


// export default App;
