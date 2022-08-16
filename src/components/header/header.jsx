import React from 'react'
import './header.css'
import CTA from './CTA'
import PIC from '../../assets/pic.png'

function Header() {
  return (
		<header>
			<div className="container header__container">
				<h3>Hello I'm</h3>
				<h1>Sally Sun</h1>
				<h4 className='text-light'>UNSW Student</h4>
				<CTA />

				<div className="me">
					<img src={PIC} alt="" />
				</div>

			</div>
		</header>
  );
}

export default Header