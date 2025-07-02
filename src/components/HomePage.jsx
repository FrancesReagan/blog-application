import React from "react";

function HomePage() {
return (
  <div className="home-welcome">
    {/* main heading for home page */}
<h1 className="home-title">
  🪶📜𓇢𓆸 Welcome to the Favorite Writings/Writers Blog 🪶📜𓇢𓆸</h1>

 {/* a friendly greeting*/}
<p className="home-subtitle">
  Writing Blog-Application made with React
</p>
  
  {/* sample content */}
  <div className="home-features">
    <h2>Features</h2>
     <ul className="features-list">
       <li> 📖 Read more about this blog via the About Page </li>
       <li> 📝 Browse the posts to read up on new writers and genres </li>
       <li> 🔍 Click on individual posts to see stats </li>
    </ul>
  </div>
  </div>
);
}

export default HomePage;

// https://emojidb.org/ //