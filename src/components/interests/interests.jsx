import React from 'react'
import "./interests.css";

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
          <h3 className="text-purple">Creative Freedom</h3>
          <h5 className="text-light">
            I believe that the core value that motivated people to join DevSoc
            is CREATION, whether it be projects, new features, a new event, a
            podcast or a video idea. And through our creations, we can learn so
            much more.
          </h5>
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
          <h3 className="text-purple">Environment</h3>
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
          <h3 className="text-purple">Marketing</h3>
          <h5 className="text-light">
            Finally, I hope to grow DevSoc's presence in the UNSW space. I hope
            to create a Linkedin and Facebook page to start our community and
            advertise our events. Despite the popularity of our Course Projects
            within the CSE community, many people in the wider UNSW do not know
            about our amazing projects. I hope that by the end of 2024, we
            expand our user base to the rest of UNSW. This could be done through
            advertising through placing posters around UNSW, posting on
            Facebook, Instagram, Tiktok, Xiaohongshu, Wechat, as well as liasing
            with other societies to promote within their society. Finally, I
            believe that there is also potential to collaborate with the UNSW
            CSE School to develop, market and promote our projects.
          </h5>
        </div>
      </div>
      <div className="container interests__container">
        <div className="content">
          <h2>Initiatives</h2>
        </div>
        <div className="content">
          <h3 className="text-purple">Bring your Event to Life</h3>
          <h5 className="text-light">
            I believe that DevSoc can also host its own internal and external
            events for members to attend. The appeal of Dev is its fluidity to
            do whatever you want. I really want all committee members to have
            the ability to take initiative and bring their event ideas to life
            with this new initiative. Here are some ideas of events I hope to
            create for DevSoc:
            <div className="interests__list">
              <h4>1.</h4>
              <h4>Sponsor Speaker Panel</h4>
            </div>
            <div className="interests__list">
              <h4>2.</h4>
              <h4>LinkedIn Photoshoot Day</h4>
            </div>
            <div className="interests__list">
              <h4>3.</h4>
              <h4>Alumni Cocktails and Networking Night</h4>
            </div>
            <div className="interests__list">
              <h4>4.</h4>
              <h4>
                Internal Committee Workshops: Interview Tips, OA Tips, How to
                make a personal website, How to write a resume, How to leverage
                LinkedIn
              </h4>
            </div>
            <div className="interests__list">
              <h4>5.</h4>
              <h4>Personal Project Showcase</h4>
            </div>
          </h5>
        </div>
        <div className="content">
          <h3 className="text-purple">Culture</h3>
          <h5 className="text-light">
            In order to build a inclusive, welcoming and exciting environment
            for DevSoc, the development of the Culture Portfolio is key. The
            whole society roadtrip, Meritons, outings, hangout rooms and study
            sessions have been amazing. As DevSoc continues to grow, it becomes
            harder to get to know everyone in the whole society. However, to
            help facilitate as many fun bonding activites as possible, where you
            really get to meet and get to know other people, we could implement:
            <div className="interests__list">
              <h4>1.</h4>
              <h4>
                More cross portfolio bonding activities across divisions so most
                portfolios get to meet each other
              </h4>
            </div>
            <div className="interests__list">
              <h4>2.</h4>
              <h4>
                Work with VPs to create division specific events and dinners so
                divisions are able to bond and get to know each other. We could
                also run division roadtrips if there is interest.
              </h4>
            </div>
            <div className="interests__list">
              <h4>3.</h4>
              <h4>
                Scavenger Hunt where everyone is split up across the committee
                so we get to meet different people
              </h4>
            </div>
          </h5>
        </div>
        <div className="content">
          <h3 className="text-purple">Ideas Box</h3>
          <h5 className="text-light">
            This is an opportunity for anyone to publicly or anonymously suggest
            ideas for any portfolio. This could be a Culture event, Content
            idea, project idea / feedback or any general event. This is to help
            facilitate inclusion for every committee member to create impact on
            DevSoc. (It would be up to the portfolio to decide to implement
            these ideas).
          </h5>
        </div>
      </div>
      <div className="container interests__container">
        <div className="content">
          <h2>Continue what we do well</h2>
        </div>
        <h3 className="text-purple">Development</h3>
        <h5 className="text-light">
          FInally, we must continue what we do best, which is development and
          code. It would be great to see our projects develop a centralised
          design and platform with the UX/UI and Platform teams. I am also keen
          to see the development of all our projects.
        </h5>
      </div>
      <div className="container space">
        <h2>Keen to see you all next year!</h2>
      </div>
    </section>
  );
}

export default Interests;