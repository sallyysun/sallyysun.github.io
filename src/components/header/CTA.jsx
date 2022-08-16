import React from 'react'
import CV from '../../assets/resume2206.pdf'

function CTA() {
	return (
		<div className='cta'>
			<a href={CV} download className='btn'>My CV</a>
			<a href="#contact" className='btn btn-primary'>Socials</a>
		</div>
	)
}

export default CTA