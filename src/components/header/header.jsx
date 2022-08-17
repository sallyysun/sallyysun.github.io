import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

// import PIC from '../../assets/pic.png'

function Header() {
  return (
		<header>
			<div className="container header__container">
				<h3>Hello I'm</h3>
				<h1>Sally Sun</h1>
				<h4 className='text-light'>2nd Year Computer Science / Science Student</h4>
				<CTA />
				<HeaderSocials />
				{/* <div className="me">
					<img src={PIC} alt="" />
				</div> */}

				<a href="#contact" className="scroll__down">Scroll Down</a>
			</div>
		</header>
  );
}

export default Header