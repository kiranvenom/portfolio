import { motion } from 'framer-motion';

export const RevealText = ({ myNumber, isHovered }) => {
	return (
		<section className='w-fit'>
			<FlipLink isHovered={isHovered}>{myNumber}</FlipLink>
		</section>
	);
};

const DURATION = 0.5;
const STAGGER = 0.1;

const FlipLink = ({ children, isHovered }) => {
	const text = String(children);
	return (
		<motion.div
			initial='initial'
			animate={isHovered ? 'hovered' : 'initial'}
			className='relative block overflow-hidden whitespace-nowrap text-8xl font-black uppercase'
			style={{ lineHeight: 1 }}>
			<div>
				{text.split('').map((l, i) => (
					<motion.span
						variants={{
							initial: { y: 0 },
							hovered: { y: '-100%' },
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
				{text.split('').map((l, i) => (
					<motion.span
						variants={{
							initial: { y: '100%' },
							hovered: { y: 0 },
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
	);
};
