import React from 'react';
import MovingText from './MovingText';
import ComeUpText from './ComeUpText';

const WhoIm = () => {
	return (
		<>
			<div className='h-[70vh] flex flex-col justify-center items-start my-14'>
				{/* <h1 className='text-8xl font-extrabold textStroke transition-all'>
					Who am I?
				</h1> */}
				<MovingText text='Who AmI?' />
				<div
					style={{ fontFamily: 'var(--secondary-font)' }}
					className='flex w-full items-start justify-start flex-col mt-8 mb-24'>
					<ComeUpText text="Hello there! I'm Kiran, a passionate front-end engineer" />
					<ComeUpText text='with a flair for crafting engaging digital experiences.' />
					<ComeUpText text='With a blend of creativity and technical prowess' />
					<ComeUpText text='I thrive on transforming designs into seamless,' />
					<ComeUpText text='interactive interfaces that captivate users. My journey' />

					<ComeUpText text='in web development has equipped me with a' />
					<ComeUpText text='deep understanding of HTML, CSS, and JavaScript,' />
					<ComeUpText text='along with expertise in modern frameworks like React.' />

					<div className='self-end w-1/2 font-blatant'>
						{/* Whether it's optimizing performance, ensuring
						cross-browser compatibility, or implementing responsive
						designs, I'm committed to delivering user-centric
						solutions that elevate the web experience. Let's
						collaborate and bring your digital vision to life! */}
						<ComeUpText text="Whether it's optimizing performance, ensuring" />
						<ComeUpText text='cross-browser compatibility, or implementing' />
						<ComeUpText text="responsive designs, I'm committed to delivering" />
						<ComeUpText text='user-centric solutions that elevate the' />
						<ComeUpText text="web experience. Let's collaborate and" />
						<ComeUpText text='bring your digital vision to life!' />
						<h1 className='w-[fit-content] px-6 py-2 border rounded-full mt-4'>
							Contact Me
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhoIm;
