import React from "react";
function AboutPage() {
  return (
    <div className="about-container">
      {/* page title */}
      <h1 className="about-title">📋 About this Blog</h1>

      {/* main content section */}
      <div className="about-section">
        <p>
          Welcome to this Blog. This blog is about writing poetry and what inspires humans to write poems.
        </p>
       <h2>Poems:</h2>
        <ul>
          <li><strong>Haiku</strong>-Saying alot by writing a little</li>
          <li><strong>Rhyme</strong>-its not outdated--falling back in love with the rhyme</li>
          <li><strong>Lymrick</strong>-what is it anyway and where did it come from?</li>
          <li><strong>Shakespeare--the Sonnet</strong>-genius at work --uncovering the magic of Shakespeare's <Sonnets></Sonnets></li>
        </ul>
      <h2>🎯 How to hit the mark everytime your write a poem:</h2>
      <p>
        It's more then just a feeling. Discover the real science between poetry and how easy it is to 
        write a poem that is affects more then the ears--but also the heart and the soul.
      </p>

      <div className="Poetry fun-facts">
        <h3> 💡 Poetry Fun Fact:,</h3>
        <p>Poetry is not just for lovers, it has saved nations, calmed war time tensions, and wooed many
          famous women.</p>

      </div>
      </div>
    </div>
  );
}

export default AboutPage;
