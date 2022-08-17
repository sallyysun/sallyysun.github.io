import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Experiences from './components/experiences/experiences'
import Interests from './components/interests/interests'
import Contact from './components/contact/contact'

import './index.css'

function App() {
  return (
    <>
			<Header />
			<Nav />
			<Experiences />
			<Interests />
			<Contact />
  	</>
	);
}

export default App
