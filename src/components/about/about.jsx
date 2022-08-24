import React from 'react'
import './about.css'

function About() {
	return (
		<section id='about'>
			<h2>About Me</h2>
			<h3>~ some fun facts about me ~</h3>
			
			<div className="container about__container">
				<h4>Favourite Colour: Purple</h4>
				<h4>Personality Type: ENFJ-T</h4>
				<h4>Fun Fact: I've changed degrees 3 times since 2021</h4>					
			</div>
		</section>
	)
}

export default About