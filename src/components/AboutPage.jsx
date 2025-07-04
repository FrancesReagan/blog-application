import React from "react";
function AboutPage() {
  return (
    <div className="about-container">
      {/* page title */}
      <h1 className="about-title">📒 About this Blog</h1>

      {/* main content section */}
      <div className="about-section">
        <p>
          Welcome to this Favorite Writers/Writings Blog. This blog is about writing and what inspires humans to write.
        </p>
       <h2>Writing:</h2>
        <ul>
          <li><strong>The Muses</strong>-the inspiration to write where does it come from?</li>
          <li><strong>Rhyme</strong>-its not outdated--falling back in love with the rhyme</li>
          <li><strong>Limerick</strong>-what is it anyway and where did it come from?</li>
          <li><strong>Shakespeare--the Sonnet</strong> - genius at work--uncovering the magic of Shakespeare's Sonnets.</li>
        </ul>
      <h2>🎯 How to hit the mark everytime you sit down to write:</h2>
      <p>
        It's more than just a feeling. Discover the real science behind writing and how easy it is to 
        write in a way that affects the heart and the soul.
      </p>

      <div className="fun-fact-box">
        <h3> 💡 Writing Fun Fact:,</h3>
        <p>Writing is not frivalous, it has saved nations, calmed war time tensions, and wooed many
          famous women and men.</p>

      </div>
      </div>
    </div>
  );
}

export default AboutPage;

// testing routing//
// import React from "react";

// function AboutPage() {
//   return (
//     <div>
//       <h1>ABOUT PAGE TEST - THIS SHOULD SHOW UP</h1>
//       <p>If you can see this, the routing works!</p>
//     </div>
//   );
// }

// export default AboutPage;
