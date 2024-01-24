import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './Profile.css';

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Developer 🌐", "React/React Native Dev 💻", "Product Designer 📱", "Passionate Dev 👨🏾‍💻"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/samuel-okoye-b68244220/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://dribbble.com/Samuel92">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="https://github.com/SamuelOkoye92">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://medium.com/@samuelokoye92">
              <i className="fa fa-medium"></i>
            </a>
            <a href="https://twitter.com/samuelokoye92">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <spam className="profile-details-name">
              {" "}
              Hello, I'm <span className="highlighted-text">Samuel</span>
            </spam>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {typeEffect}
              </h1>
              <span className="profile-role-tagline">
                I'll transform your vision into a dynamic web application.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Samuel.png" download="Samuel Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
           <div className="profile-picture-background">

           </div>
        </div>
      </div>
    </div>
  );
}
