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
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=Z_CV10sZwgA" target="_blank"><FcStart /></a>
						<h4>Love Like the Galaxy 星汉灿烂 (2022)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=_Lg6BJ1gBDo" target="_blank"><FcStart /></a>
						<h4>Joy of Life 庆余年 (2019)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=BBrxzppvreI&list=PLn7ueQx7cc2wkC03NjiaNpIJUBP2M4cmT" target="_blank"><FcStart /></a>
						<h4>The Legend of Minglan 知否知否应是绿肥红瘦 (2018)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=x-gVdZAVNUA&list=PLtt_YYUGi1gXRt2XVJZrHDBkZECcfmuAJ" target="_blank"><FcStart /></a>
						<h4>Nirvana in Fire 琅琊榜 (2015)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=yOcE_nULa4c&list=PLn7ueQx7cc2wk3e7eEiP5P9Xr4iyjFA1P" target="_blank"><FcStart /></a>
						<h4>Go Go Squid! 亲爱的，热爱的 (2019)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=kHUDonhF7_I&list=PLn9KJk8qrI_QM4DlRJjwLNMo1sdjqHQjr" target="_blank"><FcStart /></a>
						<h4>Put Your Head on My Shoulder 致我们暖暖的小时光 (2019)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=SjCcXmqO8GE&list=PLcHRE_huWMAz3VjIySjhUnC8i7JGH3hUi" target="_blank"><FcStart /></a>
						<h4>Love Me if You Dare 他来了，请闭眼 (2016)</h4>
					</div>
					<div className="interests__list">
						<a href="https://www.youtube.com/watch?v=yq151jt8izY&list=PLicjWr7QGEGvqJyfJUAJq2P1OgiTkLTea" target="_blank"><FcStart /></a>
						<h4>Love 020 微微一笑很倾城 (2016)</h4>
					</div>
				<Dramas />
			</div>


		</section>
	)
}

export default Interests;