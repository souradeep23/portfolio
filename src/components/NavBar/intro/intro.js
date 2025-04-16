import React from 'react';
import './intro.css';
import bg from '../../../Assets/50A52988-2855-4CC2-B00A-2AB5897A960A.png';
import btnImg from '../../../Assets/hire me.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introname">Souradeep</span><br />
          Web Developer
        </span>
        <p className="introPara">
          I am a passionate web developer currently pursuing my B.Tech in CSE. I enjoy building user-friendly websites and learning new tech every day.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire me" /> Hire me
          </button>
        </Link>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
