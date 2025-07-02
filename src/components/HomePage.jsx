import React from "react";

function HomePage() {
return (
  <div className="home-welcome">
    {/* main heading for home page */}
<h1 className="home-title">
  🏠Welcome to the Blog website</h1>

 {/* a friendly greeting*/}
<p className="home-subtitle">
  The Home Page of this multi-page React application
</p>
  
  {/* sample content */}
  <div className="home-features">
    <h2>Features</h2>
     <ul className="features-list">
       <li> 📖 Read the About Page to learn more </li>
       <li> 📝 Browse through Posts </li>
       <li> 🔍 Click on individual posts to see details </li>
    </ul>
  </div>
  </div>
);
}

export default HomePage;

// https://emojidb.org/ //