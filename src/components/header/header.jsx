import React from 'react'
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import DP from "../../assets/dp3.jpg";

function Header() {
  return (
    <header>
      <HeaderSocials />
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1 className="text-purple">Sally Sun</h1>
        <div>
          <h4 className="text-light text__container">
            I am a 2nd Year Computer Science / Science Student. I am running to
            be your DevSoc President for 2024.
          </h4>
          <h4 className="text-light text__container">
            I have participated in Dev since 2021. Dev has been a really fun and
            worthwhile experience and I am grateful for the people I have met
            throughout this journey.
          </h4>
          <h4 className="text-light text__container">
            I believe that I can leverage my experience in Dev to understand
            what the people of Dev want (you), as well as taking operational and
            cultural ideas from other societies I've participated in to create
            an amazing 2024 DevSoc experience for everyone.
          </h4>
        </div>
        <div className="me">
          <img src={DP} alt="dp" />
        </div>
      </div>
    </header>
  );
}

export default Header