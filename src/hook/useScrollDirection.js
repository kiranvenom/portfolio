import { useState, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState(null);
	const yScroll = useMotionValue(0);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const currentScrollY = window.pageYOffset;
			const direction = currentScrollY > lastScrollY ? 'down' : 'up';
			setScrollDirection(direction);
			lastScrollY = currentScrollY;
		};

		const handleScroll = () => {
			updateScrollDirection();
			yScroll.set(window.pageYOffset);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [yScroll]);

	return scrollDirection;
};

export default useScrollDirection;
