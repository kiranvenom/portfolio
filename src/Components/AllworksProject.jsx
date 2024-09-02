import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { projects } from '../../projects.json';
import { Link } from 'react-router-dom';

const AllworksProject = ({ project, idx }) => {
	const myImg = projects[idx].showcaseImages[0].imagePath;

	const [isHovered, setIsHovered] = useState(false);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xRange = useTransform(
		x,
		[-window.innerWidth, window.innerWidth],
		[-20, 20],
	);
	const yRange = useTransform(
		y,
		[-window.innerHeight, window.innerHeight],
		[-20, 20],
	);

	useEffect(() => {
		const handleMouseMove = (event) => {
			if (isHovered) {
				x.set(event.clientX);
				y.set(event.clientY);
			}
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [isHovered, x, y]);

	return (
		<Link to={project.title}>
			<motion.div
				className='mb-14'
				style={{ x: xRange, y: yRange }}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}>
				<div className='h-[70vh] mb-2'>
					<img
						className='w-full h-full object-cover'
						src={`http://localhost:3000/src/${myImg}`}
						alt='img'
					/>
				</div>
				<h2 className='font-blatant font-extrabold text-4xl capitalize'>
					{project.title}
				</h2>
			</motion.div>
		</Link>
	);
};

export default AllworksProject;
