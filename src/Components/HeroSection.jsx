import React, { useState, useEffect } from 'react';
import { CiCircleChevDown } from 'react-icons/ci';
import kiran1 from '../assets/images/KiranPics/kiran1png.png';
import kiran2 from '../assets/images/KiranPics/kiran2png.png';
import kiran3 from '../assets/images/KiranPics/kiran3png.png';

const images = [kiran1, kiran2, kiran3];

const HeroSection = () => {
	const [isImageVisible, setIsImageVisible] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleMouseEnter = () => {
		setIsImageVisible(true);
	};

	const handleMouseLeave = () => {
		setIsImageVisible(false);
		setCurrentImageIndex(0);
	};

	useEffect(() => {
		let interval;
		if (isImageVisible) {
			interval = setInterval(() => {
				setCurrentImageIndex((prevIndex) =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1,
				);
			}, 500);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isImageVisible]);

	return (
		<div className='hero gradient mt-[4rem] relative'>
			<h1
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className='heroBefore z-40'
				style={{ lineHeight: '4.6rem' }}>
				Pixels & Passion
			</h1>
			<p className='mt-6 font-blatant'>
				A skilled MERN stack developer with hands-on experience in
				MongoDB, Express, React, and Node.js. Passionate about crafting
				dynamic web applications, tackling complex challenges, and
				thriving in collaborative team environments. Pursued a career in
				development to transform creative ideas into functional,
				user-centric solutions.
			</p>
			<div className='mt-6'>
				<CiCircleChevDown
					strokeWidth={1}
					size={30}
					className='animate-bounce'
				/>
			</div>
			{isImageVisible && (
				<div className='absolute top-[2%] right-[20%] w-[300px] h-[300px] pointer-events-none rounded-full overflow-hidden'>
					<img
						className='w-full h-full object-cover'
						src={images[currentImageIndex]}
						alt='Kiran Pic'
					/>
				</div>
			)}
		</div>
	);
};

export default HeroSection;
