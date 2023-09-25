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
            <h2>Circles Subcommittee</h2>
            <h5>2021</h5>
          </div>
          <h4 className="text-light">
            I was Circles subcommittee under James and Jennifer, and we ideated,
            designed and built the beginning of the Circles you see now. Circles
            was the reason I decided to switch degrees to Computer Science at
            the end of the year. I learnt so much about front-end development
            this year and really treasure this opportunity.
          </h4>
          <div className="pictures fade">
            <img src={CIRCLES1} alt="circles1" />
            <img src={CIRCLES2} alt="circles2" />
          </div>
        </div>

        <div className="experience__content">
          <div className="content">
            <h2>Trainee Program & Notangles Subcommittee</h2>
            <h5>2022 T3 & 2023</h5>
          </div>
          <h4 className="text-light">
            I participated in the Trainee Program in 2022 T3, and together with
            Notangles this year I've met so many amazing people who have all
            been really lovely and so incredibly hardworking.
          </h4>
          <div className="pictures fade">
            <img src={NOTANGLES} alt="notangles" />
          </div>
        </div>

        <div className="experience__content">
          <div className="content">
            <h2>Education Director</h2>
            <h5>2022 (in bsoc)</h5>
            <h4 className="text-light">
              Throughout this experience I organised a Peer Mentoring Program
              with 600+ attendees, as well as put some of my own ideas into
              action, such as Linkedin Workshop, a Business Majors Fair and
              more. This is experience has what honed my ability to lead a group
              of people to achieve a common goal.
            </h4>
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
