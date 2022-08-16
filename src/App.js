import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experiences from './components/experiences/experiences'
import Interests from './components/interests/interests'
import Footer from './components/footer/footer'

import './index.css'

function App() {
  return (
    <>
			<Header />
			<Nav />
			<About />
			<Experiences />
			<Interests />
			<Footer />
  	</>
	);
}

export default App
