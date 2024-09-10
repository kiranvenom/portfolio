import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

const ComeUpText = ({ text, className }) => {
	let textRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			textRef.current,
			{ y: 30 }, // Starting position
			{
				y: 0, // Ending position
				scrollTrigger: {
					trigger: textRef.current,
					start: 'top 90%', // When the top of the trigger hits the bottom of the viewport
					end: 'bottom 70%',
					// markers: true,
					scrub: true,
				},
			},
		);
	}, []);

	return (
		<>
			<div className='overflow-hidden'>
				<h2
					ref={textRef}
					className={twMerge(
						'text-2xl leading-[100%] font-blatant',
						className,
					)}>
					{text}
				</h2>
			</div>
		</>
	);
};

export default ComeUpText;
