import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function HeaderSocials() {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/sally-sun-1764291a9/" target="_blank"><BsLinkedin/></a>
			<a href="https://github.com/sallyysun" target="_blank"><BsGithub/></a>
			<a href="https://www.instagram.com/sallyysun/" target="_blank"><BsInstagram/></a>
			<a href="https://www.facebook.com/sallys101" target="_blank"><BsFacebook/></a>
		</div>
	)
}

export default HeaderSocials