import React from 'react'
import './interests.css'
import Dramas from './dramas'
import {FcStart} from 'react-icons/fc'

function Interests() {
	return (
		<section id='interests'>
			<h2>Sally's Chinese Drama List</h2>
			<h3>~what i do in my spare time~</h3>
			<div className="container interests__container">
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=M-ESqiwjFFU" target="_blank"><FcStart /></a>
						<h4>Love Between Fairy and Devil 苍兰诀 (2022)</h4>
					</div>

				<Dramas />
			</div>


		</section>
	)
}

export default Interests;