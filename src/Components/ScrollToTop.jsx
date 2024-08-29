import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
	const handleUp = () => {
		console.log('scrolling to top');
		window.scrollTo({ top: 50, behavior: 'smooth' });
		console.log(window.innerHeight);
	};

	return (
		<button onClick={handleUp}>
			<IoMdArrowUp size={30} />
		</button>
	);
};

export default ScrollToTop;
