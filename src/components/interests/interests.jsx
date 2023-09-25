import React from 'react'
import './interests.css'
import Dramas from './dramas'
import {FcStart} from 'react-icons/fc'

function Interests() {
	return (
    <section id="interests">
      <h2>My Vision</h2>
      <h3>~ 2024 outlook ~</h3>
      <div className="container interests__container">
        <div className="content">
          <h2>Focus</h2>
        </div>
        <div className="content">
          <h3>Creative Freedom</h3>
          <h5 className="text-light">
            I believe that the core value that motivated people to join DevSoc
            is CREATION, whether it be projects, new features, a new event, a
            podcast or a video idea. And through our creations, we can learn so
            much more.
          </h5>{" "}
          <h5 className="text-light">
            As President, I would conduct planning days with VPs and Directors
            to understand their vision for the year and provide my support to
            help them achieve this vision. Beyond this, I would like to
            implement a 'Bring your Event to Life' initiative which will allow
            any DevSoc committeee member to run any possible event with DevSoc
            marketing and operational resources.
          </h5>
        </div>
        <div className="content">
          <h3>Environment</h3>
          <h5 className="text-light">
            With DevSoc becoming its own society, I believe that a key aspect of
            solidfying our identity is to create an inclusive, welcoming and
            exciting environment for all development enthusiasts. I hope that
            all current, new and alumini members of committee can have something
            to enjoy about Devsoc. This could be larger scale events such as
            Alumni Cocktails or smaller intimiate hangouts with all mambers of
            committee. I hope to help faciliate everything.
          </h5>
        </div>
        <div className="content">
          <h3>Marketing</h3>
          <h5 className="text-light">
            Finally, I hope to develop DevSoc's presence in the UNSW space.
            Despite the popularity of our Course Projects within the CSE
            community, many people in the wider UNSW do not know about our
            amazing projects.
          </h5>
        </div>
      </div>
      <div className="container interests__container">
        <div className="content">
          <h2>Initiatives</h2>
        </div>
        <h3>Bring your Event to Life</h3>
        <h5 className="text-light">
          I participated in the Trainee Program in 2022 T3, and together with
          Notangles this year I've met so many amazing people who have all been
          really lovely and so incredibly hardworking.
        </h5>
        <h3>Culture</h3>
        <h5 className="text-light">
          I participated in the Trainee Program in 2022 T3, and together with
          Notangles this year I've met so many amazing people who have all been
          really lovely and so incredibly hardworking.
        </h5>
        <h3>Content</h3>
        <h5 className="text-light">
          I participated in the Trainee Program in 2022 T3, and together with
          Notangles this year I've met so many amazing people who have all been
          really lovely and so incredibly hardworking.
        </h5>
      </div>
      <div className="container interests__container">
        <div className="content">
          <h2>Continue what we do well</h2>
        </div>
        <h3>UX/UI</h3>
        <h5 className="text-light">
          I participated in the Trainee Program in 2022 T3, and together with
          Notangles this year I've met so many amazing people who have all been
          really lovely and so incredibly hardworking.
        </h5>
      </div>
    </section>
  );
}

export default Interests;