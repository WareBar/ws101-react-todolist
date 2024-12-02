import "./Header.css";
import { useState } from 'react';
import Timer from './Timer.jsx';

export default function Header(){

	// use for getting the datetime
	let showDate = new Date();
	let todayDate = showDate.toDateString();


	const links =  [
		"url(https://i.pinimg.com/originals/51/4f/3f/514f3fccb71047d780be491c435a79e1.gif)",
		"url(https://i.pinimg.com/originals/1c/91/4d/1c914d7c0f43a92c48504d9a612a8d5d.gif)",
		"url(https://i.pinimg.com/originals/1f/3c/e3/1f3ce3f2fb77aeb542d616158e3b40a7.gif)",
		"url(https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif)",
		"url(https://giffiles.alphacoders.com/220/220122.gif)",
		"url(https://cdnb.artstation.com/p/assets/images/images/039/699/313/original/louis-riveron-pyxelrayn-chilling-detective3.gif?1626687921)",
		"url(https://i.redd.it/0kdjwumjadj71.gif)"
		]

	// state variable to store banner with a picture randomly selected from links const variable
	const [picture, setPicture] = useState(links[Math.floor(Math.random() * links.length)])

	const banner = {
		backgroundImage: picture
	}

	

	return (

		<div className="Header">
			<div className="banner">
				
				<div class="main-banner" style={banner}>
					<img className="avatar-banner" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/bb9c6ebc1ca2de847fd9365b70f3c7d4-1681631721/Rev_Staring%20Cat%20Preview/make-simple-pixel-art-animation-gif.gif" alt="banner avatar" />					
				</div>

			</div>
			<div className="header">
				<h1>Hey, Barry</h1>
				<p>
					<span>{todayDate}</span>
					<span> <Timer /> </span>
				</p>
			</div>
		</div>

		)
}