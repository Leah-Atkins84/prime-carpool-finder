import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>The Carppol Finder App is for Prime students! This app helps to facillitate student connections and can help save students money and save the world one ride at a time!</p>
      </div>
      <div>
        <p>This Application was built with the following technologies:</p>
      <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Material UI</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Mapbox API</li>
        </ul>
        </div>
        <div>
          <p>Challenges:</p>
          <ul>
            <li>Rendering the map along with the user pins</li>
          </ul>
          <p>Future goals:</p>
          <ul>
            <li>Adding user info to the map pins</li>
            <li>Adding a search or filter for the users to more easily find carpools</li>
          </ul>
          <p> Special thanks to:</p>
          <ul>
            <li>Prime Digital Academy and all of the Prime instructors</li>
            <li>The Adam's cohort</li>
            <li>All of my amazing friends and family for supporting me through this time!</li>
          </ul>
          <h5>Developed by Leah Atkins&nbsp; <a href="https://github.com/Leah-Atkins84">Github </a>||<a href="https://www.linkedin.com/in/leah-atkins-dev-mls/">Linkedin</a></h5>
      
            
         
        </div>
    </div>
  );
}

export default AboutPage;
