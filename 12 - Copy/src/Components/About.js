import React from 'react';
import HeadoutLogo from './Images/headout.png';
import './Styles/About.css';
import img1 from './Images/ananth.jpg';
import img2 from './Images/boo boo.jpg';
import img3 from './Images/panda.jpg';
import img4 from './Images/sathish.jpg';
import img5 from './Images/VISHNU.jpg';

const About = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Our Team Members</h1>
      <div className="team-member">
        <div className="member-info">
        <img src={img1} height="150px"/>
          <h1>ANANTHAKUMAR L</h1>
          <h2>AIML</h2>
          <h3>ananthakumar.l2022ai-ml@sece.ac.in</h3>
        </div>
      </div>
      <div className="team-member">
        <div className="member-info">
        <img src={img2} height="150px"/>
          <h1>BHUVANESH K</h1>
          <h2>AIML</h2>
          <h3>bhuvanesh.k2022ai-ml@sece.ac.in</h3>
        </div>
      </div>
      <div className="team-member">
        <div className="member-info">
        <img src={img3} height="150px"/>
          <h1>PRADHEEBAN A</h1>
          <h2>AIML</h2>
          <h3>pradheeban.a2022ai-ml@sce.ac.in</h3>
        </div>
      </div>
      <div className="team-member">
        <div className="member-info">
          <img src={img4} height="150px"/>
          <h1>SATHISH D K</h1>
          <h2>AIML</h2>
          <h3>sathish.dk2022ai-ml@sece.ac.in</h3>
        </div>
      </div>
      <div className="team-member">
        <div className="member-info">
          <img src={img5} height="150px"/>
          <h1>VISHNUPARGAVAN V</h1>
          <h2>AIML</h2>
          <h3>Vishnupargavan.v2022ai-ml@sece.ac.in</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
