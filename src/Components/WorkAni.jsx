import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const WorkAni = () => {
	const vidRef = useRef(null);

	useEffect(() => {
		const t1 = gsap.timeline();

		// Animation
		t1.to(vidRef.current, {
			scrollTrigger: {
				trigger: vidRef.current,
				start: '0% 78%',
				end: 'bottom 20%',
				scrub: true,
				// markers: true,
			},
			y: 400,
			scale: 5.5,
			duration: 5,
			borderRadius: 5,
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
			<MagneticButton>
				<Link
					to='/works'
					className='px-6 py-2 border rounded-full mt-10 font-blatant text-xl'>
					Explore My Projects
				</Link>
			</MagneticButton>

			<video
				loop
				ref={vidRef}
				className='rounded-[50px] border border-[#111b32] -ml-16'
				muted
				autoPlay
				width='200px'
				src='./src/assets/video/final.mp4'
				style={{ transform: 'scale(1)', y: '0px' }}></video>
			<MagneticButton>
				<h1 className='px-6 py-2 border rounded-full mt-10 font-blatant text-xl'>
					Get in Touch
				</h1>
			</MagneticButton>
		</div>
	);
};

export default WorkAni;
