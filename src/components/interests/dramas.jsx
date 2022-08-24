import React from 'react'
import List from '../../assets/dramas.pdf'

function Dramas() {
	return (
		<div className='dramas'>
			<a href={List} download className='btn'>Download Extensive Drama List</a>
		</div>
	)
}

export default Dramas