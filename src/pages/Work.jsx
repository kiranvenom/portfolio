import EnhancedMinimalButton from '../Components/EnhancedMinimalButton';
import IconRenderer from '../Components/IconRenderer';
import ImageParallax from '../Components/ImageParallax';
import ImageShowCase from '../Components/ImageShowCase';

import img2 from '../assets/worksImg/laptopMockup.jpg';
import img3 from '../assets/worksImg/mobileMockup.jpg';

const Work = () => {
	const icons = [
		'react',
		'nodejs',
		'js',
		'vite',
		'vercel',
		'github',
		'tailwind',
	];
	return (
		<div className='mt-[8rem]'>
			<div className='container'>
				<div className='h-[50vh] flex flex-col justify-between'>
					<h1 className='text-6xl'>GulfLine SA</h1>
					<div className='pb-14 flex items-end justify-between'>
						<div>
							<h2 className='font-blatant mb-2'>
								Technologies used
							</h2>

							<div className='flex'>
								<IconRenderer icons={icons} />
							</div>
						</div>

						<EnhancedMinimalButton href='https://www.youtube.com/@tomisloading'>
							visit
						</EnhancedMinimalButton>
					</div>
				</div>
			</div>

			<ImageParallax />

			<div className='h-[50vh]'>
				<div className='flex justify-start items-center h-full container gap-24'>
					<h2 className='text-2xl'>About</h2>
					<div className='font-blatant'>
						<h2 className='pt-16 mb-6 text-2xl'>
							Elevate your home search with LoftLoom, the SaaS
							product designed for discovering tailored,
							exceptional living spaces.
						</h2>
						<h2>
							We undertook meticulous UX research, improved the
							overall user experience, designed visual mockups for
							every page with our design system, and produced
							functional prototypes.
						</h2>
					</div>
				</div>
			</div>

			<ImageShowCase image={img2} />

			<div className='h-[50vh]'>
				<div className='flex justify-start items-center h-full container gap-24'>
					<h2 className='text-2xl'>Technologies</h2>
					<div className='font-blatant'>
						<h2 className='pt-16 mb-6 text-2xl'>
							Elevate your home search with LoftLoom, the SaaS
							product designed for discovering tailored,
							exceptional living spaces.
						</h2>
						<h2>
							We undertook meticulous UX research, improved the
							overall user experience, designed visual mockups for
							every page with our design system, and produced
							functional prototypes.
						</h2>
					</div>
				</div>
			</div>

			<ImageShowCase image={img3} />
		</div>
	);
};

export default Work;
