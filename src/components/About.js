import React from 'react';
import '../css/App.css';
import '../css/About.css';

function About() {
  return (
    <div className="about">
      <h1 className="about-header">About Me</h1>

      <div className="about-container">
        <div className="about-img-wrapper">
          <img
            className="about-img"
            src="/images/japan-lights.jpg"
            alt="About Img"
          />
        </div>

        <div className="about-text-wrapper">
          <h2 className="about-text-header">
            Hey! I'm
            <span className="about-text-name"> Faheem</span>
            !
            <br />
            Here's a little bit about me!
          </h2>

          <br />

          <p className="about-text">
            Im a 2nd year Computer Science student at Carleton University in
            Ottawa. I've spent my entire life in Ottawa, my parents immigrated
            to Canada from a small island country in the Indian Ocean called
            Mauritius. My parents left all they had back home and moved across
            the world to Canada so that they could give me and my older brother
            more opportunities and a better life. The example my parents and
            older brother have set for me motivates me to always work hard,
            strive for greater heights and make them proud.{" "}
          </p>

          <br />

          <p className="about-text">
            My passion for all things computers and technology began at a very
            young age. My dad is an IT and as a result of that I've been
            surrounded by all kinds of cool tech for my entire life! From a
            young age my dad would teach me about everything computers, hardware
            and software. He taught me how to problem solve by teaching me how
            to teardown, fix and reassemble all kinds of computers. I began
            pursuing my passion for technology even further in high school when
            I took my first computer programming course where I learnt the
            basics of computer programming in Java. Since then, I've continued
            to further improve my programming knowledge and skills as well as
            learn more and more about all kinds of new and innovative
            technologies. The continued rapid innovation in technology today is
            what inspires me to learn more and more everyday.
          </p>

          <br />

          <p className="about-text">
            Listed below are some more of my hobbies!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
