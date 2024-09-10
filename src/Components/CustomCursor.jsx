import React, { useEffect, useRef } from 'react';

const lerp = (start, end, factor) => {
	return start + (end - start) * factor;
};

const CustomCursor = () => {
	const cursorRef = useRef(null);
	const requestRef = useRef(null);
	const mousePos = useRef({ x: 0, y: 0 });
	const cursorPos = useRef({ x: 0, y: 0 });

	const animate = () => {
		cursorPos.current.x = lerp(
			cursorPos.current.x,
			mousePos.current.x,
			0.2,
		);
		cursorPos.current.y = lerp(
			cursorPos.current.y,
			mousePos.current.y,
			0.4,
		);

		if (cursorRef.current) {
			cursorRef.current.style.left = `${cursorPos.current.x}px`;
			cursorRef.current.style.top = `${cursorPos.current.y}px`;
		}

		requestRef.current = requestAnimationFrame(animate);
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			mousePos.current.x = e.clientX;
			mousePos.current.y = e.clientY;
		};

		document.addEventListener('mousemove', handleMouseMove);
		requestRef.current = requestAnimationFrame(animate);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(requestRef.current);
		};
	}, []);

	return (
		<div
			ref={cursorRef}
			className='fixed w-[40px] h-[40px] rounded-full backdrop-blur pointer-events-none transition-transform duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 border border-[#002b99]'
			style={{ zIndex: 9999 }}></div>
	);
};

export default CustomCursor;
