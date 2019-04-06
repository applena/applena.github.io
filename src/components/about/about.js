import React from 'react';
import './about.scss';
import lenaBW from '../../img/lenaBW.jpg';

class About extends React.Component{
  render(){
    return(
      <div id="about">
        <h2>About Me</h2>
        <img src={lenaBW} />
        <p>
          Creative, client-centered Full-Stack Software Engineer who successfully grew a thriving business with year over year growth for 8 years. Flourishes under the pressure of deadlines while implementing the newest design theories and best business practices to ensure client satisfaction. Expert in the tools of the industry including JavaScript, React, Redux, Node.js, SASS, CSS, HTML, SQL, Postgress, Mongo, git, Adobe Photoshop, Adobe Lightroom, and Adobe Illustrator.
        </p>
        <p>
          Specialties: JavaScript, React, Redux, Context, Node.js, SASS, CSS, github, Adobe Creative Suite, Working as part of a team, Inspiring confidence, Managing Projects.
        </p>
      </div>
    );
  }
}

export default About;