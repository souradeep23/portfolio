// src/components/Skills/Skills.js
import React from 'react';
import './skill.css';
import UIDesign from '../../Assets/UIDesign.png';
import WebDesign from '../../Assets/WebDesign.png';
import KeyNote from '../../Assets/keynote.png';

export const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillTitle">What I Do</h2>
      <p className="skillDesc">
        I am a skilled UI Designer, Web Designer, and Keynote Specialist with over 3 years of experience in crafting visually engaging and user-friendly digital experiences. I specialize in creating intuitive interfaces, responsive web layouts, and impactful presentations that elevate brand identity and user engagement.
      </p>
      
      <div className="skillContainer">
        <div className="skillCard">
          <img src={UIDesign} alt="UIDesign" className="skillIcon" />
          <div className="skillText">
            <h3>UI/UX Design</h3>
            <p>Create your own design</p>
          </div>
        </div>

        <div className="skillCard">
          <img src={WebDesign} alt="WebDesign" className="skillIcon" />
          <div className="skillText">
            <h3>Website Design</h3>
            <p>Create your own website here.</p>
          </div>
        </div>

        <div className="skillCard">
          <img src={KeyNote} alt="KeyNote" className="skillIcon" />
          <div className="skillText">
            <h3>Keynote</h3>
            <p>Create your own templates, PPTs here.</p>
          </div>
        </div>
      </div>

      {/* Add just this spacer */}
      <div style={{ height: "100px" }}></div>
    </section>
  );
};
