import React from 'react';

const WhoIm = () => {
	return (
		<>
			<div className='h-[70vh] flex flex-col justify-center items-start my-14'>
				<h1 className='text-9xl font-extrabold'>
					Who
					<br /> I'am
				</h1>
				<div
					style={{ fontFamily: 'var(--secondary-font)' }}
					className='flex w-full items-start justify-start flex-col'>
					<h1 className='w-1/2'>
						Hello there! I'm Kiran, a passionate front-end engineer
						with a flair for crafting engaging digital experiences.
						With a blend of creativity and technical prowess, I
						thrive on transforming designs into seamless,
						interactive interfaces that captivate users. My journey
						in web development has equipped me with a deep
						understanding of HTML, CSS, and JavaScript, along with
						expertise in modern frameworks like React and Vue.js.
					</h1>
					<div className='self-end w-1/2'>
						Whether it's optimizing performance, ensuring
						cross-browser compatibility, or implementing responsive
						designs, I'm committed to delivering user-centric
						solutions that elevate the web experience. Let's
						collaborate and bring your digital vision to life!
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
