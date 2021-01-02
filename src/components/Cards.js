import React from 'react'
import CardItem from './CardItem';
import '../css/Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>My Projects</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="/images/placeholder.jpg"
              text="Website built using JavaScript, HTML and CSS that is similar to the Internet Movie Database (IMDB) website."
              label="MovieDataBase"
              path="/projects"
            />

            <CardItem
              src="/images/japan-lights.jpg"
              text="A Discord bot built in python to managine teams and voice channels for custom 10-Man Counter-Strike games using the FaceIt API."
              label="Discord-Faceit Bot"
              path="/projects"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src="/images/placeholder.jpg"
              text="A 2D Game made using Java and Processing."
              label="Bella Bean's Bonstruction Adventure Game"
              path="/projects"
            />
            <CardItem
              src="/images/placeholder.jpg"
              text="This is my 4th Project I will be showcasing"
              label="Project 4"
              path="/projects"
            />
            <CardItem
              src="/images/placeholder.jpg"
              text="This is my 5th project I will be showcasing "
              label="Project 5"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
