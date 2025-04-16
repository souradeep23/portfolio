import React from 'react';
import './contact.css';
import Planetspark from '../../Assets/Planetspark.png';
import Yhills from '../../Assets/Yhills.png';
import KnineNGO from '../../Assets/KnineNGO.png';
import Instagram from '../../Assets/Instagram.png';
import Facebook from '../../Assets/Facebook.png';
import Whatsapp from '../../Assets/Whatsapp.png';
import Telegram from '../../Assets/Telegram.png';

const Contact = () => {
  return (
    <section className="contactPage">
      
      {/* My Clients Section */}
      <div className="clients" id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I’ve had the pleasure of working with clients from various industries and different NGOs delivering high-quality web solutions tailored to their needs.
        </p>
        <div className="clientImgs">
          <div className="clientImgWrapper">
            <img src={Planetspark} alt="Client1" className="clientImg" />
            <div className="overlay">PlanetSpark</div>
          </div>
          <div className="clientImgWrapper">
            <img src={Yhills} alt="Client2" className="clientImg" />
            <div className="overlay">YHills</div>
          </div>
          <div className="clientImgWrapper">
            <img src={KnineNGO} alt="Client3" className="clientImg" />
            <div className="overlay">K-Nine NGO</div>
          </div>
        </div>
      </div>

      {/* 👇 Spacer between My Clients and Contact Me */}
      <div style={{ height: "100px" }}></div>

      {/* Contact Me Section */}
      <div className="contactSection" id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Interested in modern web design or sleek Keynote presentation templates? Fill out the form below to get in touch—I’d love to hear about your project and how I can help!
        </p>
        <form className="contactForm">
          <input type="text" className="contactInput bounce" placeholder="Your Name" required />
          <input type="email" className="contactInput bounce" placeholder="Your Email" required />
          <textarea className="contactMessage bounce" placeholder="Your Message" required rows="5" />
          <button type="submit" className="contactButton">Submit</button>
        </form>

        <div className="contactIcons">
          <div className="iconWrapper">
            <img src={Instagram} alt="Instagram" className="contactIcon" />
            <div className="iconOverlay">Instagram</div>
          </div>
          <div className="iconWrapper">
            <img src={Facebook} alt="Facebook" className="contactIcon" />
            <div className="iconOverlay">Facebook</div>
          </div>
          <div className="iconWrapper">
            <img src={Whatsapp} alt="Whatsapp" className="contactIcon" />
            <div className="iconOverlay">WhatsApp</div>
          </div>
          <div className="iconWrapper">
            <img src={Telegram} alt="Telegram" className="contactIcon" />
            <div className="iconOverlay">Telegram</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
