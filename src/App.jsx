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

// main App component//
function App(){
  return (
    // BrowswerRouter enables routing for the entire app//
    <BrowserRouter>
    <div className="app-container">
      {/* navigation appears on all pages */}
      <Navigation/>

      {/* main content area */}
      <main className="main-content">
         {/* routes define which component to show for each URL */}
        <Routes>
        {/* home page -shows when URL is exactly "/" */}
      <Route path="/" element={<HomePage/>}/>

      {/* about page -shows when URL is "/about" */}
      <Route path="/about" element={<AboutPage/>}/>

      {/* posts page - shows when URL is "/posts" */}
      <Route path="/posts" element={<PostsPage/>}/>

      {/* post detail page - shows when URL is "/posts/123" */}
      <Route path="/posts/:postId" element={<PostDetailPage/>}/>

      {/* catch-all route for 404 pages */}
      <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

// 404 not found page component//
function NotFoundPage(){
  return (
    <div className="not-found-container">
      <h1 className="not-found-emoji">🤔</h1>
      <h2 className="not-found-title">
        Oops! Page Not Found
      </h2>
      <div className="not-found-buttons">
      <Link to="/" className="not-found-button primary">
        🏠 Go Home
      </Link>

      <Link to="/posts" className="not-found-button secondary">
       📝 Browse Posts
      </Link>
      </div>
    </div>
  );
}

export default App;
