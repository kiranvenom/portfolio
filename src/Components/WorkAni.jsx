import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WorkAni = () => {
	const vidRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animation
		gsap.to(vidRef.current, {
			scrollTrigger: {
				trigger: vidRef.current,
				start: '0% 78%',
				end: 'bottom 20%',
				scrub: true,
				// markers: true,
			},
			y: 350,
			scale: 5.5,
			duration: 5,
		});

		// Clean up function
		return () => {
			// Ensure proper cleanup to avoid memory leaks
			ScrollTrigger.getAll().forEach((trigger) => {
				trigger.kill();
			});
		};
	}, []);

	return (
		<div className='flex justify-between items-start h-screen'>
			<h1 className='px-6 py-2 border rounded-full mt-4'>Explore Work</h1>
			<video
				// loop
				ref={vidRef}
				className='rounded-lg'
				muted
				// autoPlay
				width='200px'
				src='./src/assets/video/coding.mp4'
				style={{ transform: 'scale(1)', y: '0px' }}></video>
			<h1 className='px-6 py-2 border rounded-full mt-4'>Get in Touch</h1>
		</div>
	);
};

export default WorkAni;
