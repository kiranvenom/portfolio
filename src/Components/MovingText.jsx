import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MovingText = ({ text }) => {
	const wordsRef = useRef([]);
	wordsRef.current = [];

	const addToRefs = (el) => {
		if (el && !wordsRef.current.includes(el)) {
			wordsRef.current.push(el);
		}
	};

	useEffect(() => {
		wordsRef.current.forEach((word, index) => {
			gsap.fromTo(
				word,
				{
					x: index % 2 === 0 ? '-100%' : '100%',
					opacity: 0,
				},
				{
					x: '0%',
					opacity: 1,
					duration: 1.5,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: word,
						start: 'top 80%',
						toggleActions: 'play none none reset',
						// markers: true,
					},
				},
			);
		});
	}, []);

	let words = text.split(' ');

	return (
		<div>
			{words.map((word, index) => (
				<h2
					key={index}
					ref={addToRefs}
					className='font-blatant text-9xl font-bold'>
					{word}
				</h2>
			))}
		</div>
	);
};

export default MovingText;
