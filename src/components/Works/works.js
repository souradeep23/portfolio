import React from 'react';
import './works.css';
import Picture1 from '../../Assets/Picture1.png';
import Picture2 from '../../Assets/Picture2.png';
import Picture3 from '../../Assets/Picture3.png';
import Picture4 from '../../Assets/Picture4.png';
import Picture5 from '../../Assets/Picture5.png';
import Picture6 from '../../Assets/Picture6.png';

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I'm Souradeep Debbarma, a passionate web developer and CSE student who loves creating intuitive websites and constantly learning new technologies.
      </span>
      <div className="worksImgs">
        <div className="worksItem">
          <img src={Picture1} alt="Picture 1" className="worksImg" />
          <div className="worksOverlay">Picture 1</div>
        </div>
        <div className="worksItem">
          <img src={Picture2} alt="Picture 2" className="worksImg" />
          <div className="worksOverlay">Picture 2</div>
        </div>
        <div className="worksItem">
          <img src={Picture3} alt="Picture 3" className="worksImg" />
          <div className="worksOverlay">Picture 3</div>
        </div>
        <div className="worksItem">
          <img src={Picture4} alt="Picture 4" className="worksImg" />
          <div className="worksOverlay">Picture 4</div>
        </div>
        <div className="worksItem">
          <img src={Picture5} alt="Picture 5" className="worksImg" />
          <div className="worksOverlay">Picture 5</div>
        </div>
        <div className="worksItem">
          <img src={Picture6} alt="Picture 6" className="worksImg" />
          <div className="worksOverlay">Picture 6</div>
        </div>
      </div>
    </section>
  );
};

export default Works;
