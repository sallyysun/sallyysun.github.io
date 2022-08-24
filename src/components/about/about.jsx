import React from 'react'
import './about.css'

function About() {
	return (
		<section id='about'>
			<h3>About Me ...</h3>
			<h2>some fun facts about me</h2>
			
			<div className="container about__container">
				<div>
					<h3>1</h3>
					<h4>I have a scar on my forehead from when my mum dropped me as a baby.</h4>
				</div>

				<div>
					<h3>2</h3>
					<h4>My favourite colour is purple.</h4>
				</div>

				<div>
					<h3>3</h3>
					<h4>I've changed degrees 3 times since 2021...</h4>
					<h5>Commerce / Computer Science</h5>
					<h5>Commerce Information Systems (Coop)</h5>
					<h5>Commerce / Computer Science</h5>
					<h5>Science / Computer Science</h5>
				</div>
			</div>
		</section>
	)
}

export default About