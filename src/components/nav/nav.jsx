import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

function Nav() {
	const[activeNav, setActiveNav] = useState('#') 
	return (
		<nav>
			<a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}>
				<AiFillHome/>
			</a>
			<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>
				<AiOutlineContacts/>
			</a>
			<a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active': ''}>
				<AiOutlineBook/>
			</a>
			<a href="#interests" onClick={() => setActiveNav('#interests')} className={activeNav === '#interests' ? 'active': ''}>
				<AiOutlineHeart/>
			</a>
		</nav>
	)
}

export default Nav