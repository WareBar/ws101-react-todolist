import "./Header.css";


export default function Header(){

	let showDate = new Date();
	// let todayDate = showDate.getDate() + "/" + showDate.getMonth() + "/" + showDate.getFullYear();
	let todayDate = showDate.toDateString();
	let currentTime = `${showDate.getHours()}:${showDate.getMinutes()}:${showDate.getSeconds()}`



	return (

		<div className="Header">
			<div class="banner">
				
				<div class="main-banner">
					<img class="avatar-banner" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/bb9c6ebc1ca2de847fd9365b70f3c7d4-1681631721/Rev_Staring%20Cat%20Preview/make-simple-pixel-art-animation-gif.gif" alt="banner avatar" />					
				</div>

			</div>
			<div class="header">
				<h1>Hey, Barry</h1>
				<p>
					<span>{todayDate}</span>
					<span>{currentTime}</span>
				</p>
			</div>
		</div>

		)
}