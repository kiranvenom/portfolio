import React, { useState, useEffect } from 'react';
import kiran1 from '../assets/images/KiranPics/kiran1.jpg';
import kiran2 from '../assets/images/KiranPics/kiran2.jpg';
import kiran3 from '../assets/images/KiranPics/kiran3.jpg';

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
				className='heroBefore'
				style={{ lineHeight: '4.6rem' }}>
				Pixels & Passion
			</h1>
			<p className='mt-6'>
				A skilled MERN stack developer with hands-on experience in
				MongoDB, Express, React, and Node.js. Passionate about crafting
				dynamic web applications, tackling complex challenges, and
				thriving in collaborative team environments. Pursued a career in
				development to transform creative ideas into functional,
				user-centric solutions.
			</p>
			{isImageVisible && (
				<div className='absolute top-[20%] right-[20%] w-[200px] h-[300px] pointer-events-none rounded-lg overflow-hidden'>
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
