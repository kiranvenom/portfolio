import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ src, rr, title }) => {
	const imgRef = useRef(null);
	const textDivRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			imgRef.current,
			{
				rotate: rr ? -10 : 10,
				x: rr ? -600 : 600,
				opacity: 0,
			},
			{
				rotate: 0,
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: imgRef.current,
					start: 'top 75%',
					end: 'top 20%',
					scrub: 1,
					// markers: true,
				},
			},
		);

		gsap.fromTo(
			textDivRef.current,
			{
				x: rr ? -500 : 500,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				scrollTrigger: {
					trigger: textDivRef.current,
					start: 'top 60%',
					end: 'top 50%',
					// scrub: 1,
					// markers: true,
				},
			},
		);
	}, [rr]);

	return (
		<div
			className={
				rr
					? 'flex items-center justify-between flex-row-reverse my-4'
					: 'flex items-center justify-between my-4'
			}>
			<div ref={textDivRef}>
				<h1 className='text-5xl mb-4'>{title}</h1>
				<h2 className='mb-4'>UI / UX , Web Development</h2>
				<MagneticButton>
					<h1 className='px-6 py-2 border rounded-full w-[fit-content]'>
						View Project
					</h1>
				</MagneticButton>
			</div>
			<div>
				<div
					style={{
						width: '800px',
					}}>
					<img
						ref={imgRef}
						className='w-full'
						src={src}
						alt={title}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
