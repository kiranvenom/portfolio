import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const RevealLinks = ({ linkName, to }) => {
	return (
		<section className='text-white w-fit'>
			<FlipLink to={to}>{linkName}</FlipLink>
		</section>
	);
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, to }) => {
	return (
		<Link to={to}>
			<motion.div
				initial='initial'
				whileHover='hovered'
				className='relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-7xl'
				style={{
					lineHeight: 1,
				}}>
				<div>
					{children.split('').map((l, i) => (
						<motion.span
							variants={{
								initial: {
									y: 0,
								},
								hovered: {
									y: '-100%',
								},
							}}
							transition={{
								duration: DURATION,
								ease: 'easeInOut',
								delay: STAGGER * i,
							}}
							className='inline-block'
							key={i}>
							{l}
						</motion.span>
					))}
				</div>
				<div className='absolute inset-0'>
					{children.split('').map((l, i) => (
						<motion.span
							variants={{
								initial: {
									y: '100%',
								},
								hovered: {
									y: 0,
								},
							}}
							transition={{
								duration: DURATION,
								ease: 'easeInOut',
								delay: STAGGER * i,
							}}
							className='inline-block'
							key={i}>
							{l}
						</motion.span>
					))}
				</div>
			</motion.div>
		</Link>
	);
};
