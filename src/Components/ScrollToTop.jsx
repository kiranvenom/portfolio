import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
	const handleUp = () => {
		console.log('scrolling to top');
		window.scrollTo({ top: 0, behavior: 'smooth' });
		console.log(window.innerHeight);
	};

	return (
		<button
			className='border border-[#353535] rounded-full p-2'
			onClick={handleUp}>
			<IoMdArrowUp size={30} />
		</button>
	);
};

export default ScrollToTop;
