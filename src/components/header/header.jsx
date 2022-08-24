import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import DP from '../../assets/dp.JPG'

function Header() {
  return (
		<header>
			<div className="container header__container">
				<h2>Hello I'm</h2>
				<h1>Sally Sun</h1>
				<h4 className='text-light'>2nd Year Computer Science / Science Student</h4>
				<CTA />
				<HeaderSocials />
				<div className="me">
					<img src={DP} alt="dp" />
				</div>

			</div>
		</header>
  );
}

export default Header