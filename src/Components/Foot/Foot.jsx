import Button from "../UI_Components/Button.jsx";

const Foot = () => {
	return (
		<div
			className={`py-12 px-12 flex flex-col items-center justify-start gap-3 xl:flex-row xl:h-fit  lg:min-w-[65rem] lg:m-auto lg:max-w-[75rem] lg:py-3 lg:px-10 `}
		>
			<div className={` flex items-center justify-center flex-col gap-6 xl:mr-44 lg:items-start`}>
				<img src="/images/logo-white.svg" alt="logo" />
				<ul className={`flex items-center justify-center gap-5`}>
					<li>
						<img
							src="/images/icon-facebook.svg"
							alt="_facebooklogo"
						/>
					</li>
					<li>
						<img
							src="/images/icon-youtube.svg"
							alt="_youtubelogo"
						/>
					</li>
					<li>
						<img
							src="/images/icon-twitter.svg"
							alt="_twitterlogo"
						/>
					</li>
					<li>
						<img
							src="/images/icon-pinterest.svg"
							alt="_pinterestlogo"
						/>
					</li>
					<li>
						<img
							src="/images/icon-instagram.svg"
							alt="_instagramlogo"
						/>
					</li>
				</ul>
			</div>
			<div
				className={`flex items-center justify-center flex-col gap-4 py-7 text-c_light_grayish_blue text-sm xl:flex-row lg:text-base lg:gap-10`}
			>
				<ul className={`flex items-center justify-center flex-col gap-4 lg:items-start`}>
					<li>About</li>
					<li>Contact</li>
					<li>Blog</li>
				</ul>
				<ul className={`flex items-center justify-center flex-col gap-4 lg:items-start`}>
					<li>Careers</li>
					<li>support</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
			<div className={`flex items-center justify-center flex-col gap-5 flex-1 xl:justify-end xl:items-end`}>
				<Button />
				<p className={`text-c_grayish_blue text-sm`}>
					&copy;Easybank. All Rights Reserved
				</p>
			</div>
		</div>
	)
}
export default Foot
