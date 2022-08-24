import React from 'react'
import './about.css'
import UBS2 from '../../assets/ubs2.jpg'
import {FcLikePlaceholder, FcEngineering, 
	FcStackOfPhotos, FcMms, FcFlashOn, FcFullTrash, 
	FcWorkflow, FcBusinesswoman, FcAdvertising} from 'react-icons/fc'

function About() {
	return (
		<section id='about'>
			<h2>About Me</h2>
			<h3>~ some fun facts about me ~</h3>
			
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={UBS2} alt="ubs2" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__info">
						<h4><FcLikePlaceholder /> NAME <FcLikePlaceholder /></h4>
						<h5>Sally Sun</h5>
					</div>
					<div className="about__info">
						<h4><FcBusinesswoman /> AGE <FcBusinesswoman /></h4>
						<h5>19</h5>
					</div>
					<div className="about__info">
						<h4><FcMms /> YEAR <FcMms /></h4>
						<h5>2nd Year</h5>
					</div>
					<div className="about__info">
						<h4><FcEngineering /> DEGREE <FcEngineering /></h4>
						<h5>Bachelor Computer Science / Science (Statistics)</h5>
					</div>
					<div className="about__info">
						<h4><FcWorkflow /> PERSONALITY TYPE <FcWorkflow /></h4>
						<h5>ENFJ-T</h5>
					</div>
					<div className="about__info">
						<h4><FcFlashOn /> STAR SIGN <FcFlashOn /></h4>
						<h5>Capricorn</h5>
					</div>
					<div className="about__info">
						<h4><FcFullTrash /> FAVOURITE COLOUR <FcFullTrash /></h4>
						<h5>Purple</h5>
					</div>
					<div className="about__info">
						<h4><FcAdvertising /> FUN FACT <FcAdvertising /></h4>
						<h5>I've switched degrees 3 times since 2021</h5>
					</div>
					<div className="about__info">
						<h4><FcStackOfPhotos /> HOBBIES <FcStackOfPhotos /></h4>
						<h5>Watching Chinese Dramas, Movies, TV Shows, Embroidery, Fashion</h5>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About