import React from 'react'
import './experiences.css'

function Experiences() {
	return (
		<section id='experiences'>
			<h2>My Experiences</h2>
			<h3>~ some things i've done recently ~</h3>

			<div className="container experience__container">
				<div>
					<h4>UBS</h4>
					<h3>Tech Cadet</h3>
					<h5>July 2021 - Current</h5>
					
					<div className="picture">
						
					</div>
				</div>

				<div>
					<h4>UNSW Business Society</h4>
					<h3>Education Director</h3>
					<h5>November 2021 - Current</h5>
				</div>

				<div>
					<h4>UNSW CSESoc</h4>
					<h3>Circles Frontend</h3>
					<h5>February 2021 - November 2021</h5>
				</div>

				<div>
					<h4>Self-Employed</h4>
					<h3>3U & 4U Mathematics Tutor</h3>
					<h5>February 2019 - Current</h5>
				</div>
			</div>
		</section>
	)
}

export default Experiences