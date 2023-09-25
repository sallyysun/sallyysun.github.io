import React from "react";
import "./experiences.css";
import BSOC1 from "../../assets/bsoc1.jpg";
import BSOC2 from "../../assets/bsoc2.jpg";
import NOTANGLES from "../../assets/notangles.jpg";
import CIRCLES1 from "../../assets/circles1.PNG";
import CIRCLES2 from "../../assets/circles2.PNG";

function Experiences() {
  return (
    <section id="experiences">
      <h2>My Dev and Society Journey</h2>
      <h3>~ over the past 3 years ~</h3>
      <div className="container experience__container">
        <div className="experience__content">
          <div className="content">
            <h2>Circles Subcom</h2>
            <h4>2021</h4>
          </div>
          <h5 className="text-light">
            I was Circles subcommittee under James and Jenn, and we ideated,
            designed and built the beginning of the Circles you see now. Circles
            was the reason I decided to switch degrees to Computer Science at
            the end of the year. I learnt so much about front-end development
            this year and loved ideating a new site. (Fun fact: all my mock up
            designs were purple so we ended up making Circles purple.)
          </h5>
          <div className="pictures fade">
            <img src={CIRCLES1} alt="circles1" />
            <img src={CIRCLES2} alt="circles2" />
          </div>
        </div>

        <div className="experience__content">
          <div className="content">
            <h2>Trainee Program & Notangles Subcom</h2>
            <h4>2022 T3 & 2023</h4>
          </div>
          <h5 className="text-light">
            I participated in the Trainee Program in 2022 T3 where we made a
            Roadtrip Planner. Notangles this year has also been an amazing
            experience where I have learnt how to structure and add to a large
            repository. I have met so many incredibly hardworking who have all
            been really lovely.
          </h5>
          <h5>
            Shoutout to MJ, Raiyan, Rachel, Manhua, Wanning, Sijin, Jasmine,
            Shaam, Eklavya, Michael
          </h5>
          <div className="pictures fade">
            <img src={NOTANGLES} alt="notangles" />
          </div>
        </div>

        <div className="experience__content">
          <div className="content">
            <h2>Education Director</h2>
            <h4>2022 (BSOC)</h4>
            <h5 className="text-light">
              I led a team of 8 subcom to create events such as Peer Mentoring
              Program with 600+ attendees, Linkedin Workshop, a Business Majors
              Fair and more. This experience developed my leadership skills and
              organisational ability. I put my ideas into action in order to
              provide value for the Business students community in terms of
              career, peer and academic development. I hope to achieve the same
              and much more in DevSoc.
            </h5>
            <h5 className="text-light">
              Other society experiences: BITSA, I4C
            </h5>
          </div>
          <div className="pictures fade">
            <img src={BSOC1} alt="bsoc1" />
            <img src={BSOC2} alt="bsoc2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
