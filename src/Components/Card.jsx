import React, { useState } from 'react';
import { RevealText } from './RevealText';

const Card = ({ myNumber = 20 }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className='p-8 m-4 rounded-3xl flex flex-col justify-between h-[45vh] bg-[#131a2a] card pt-10'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<h1 className='flex'>
				<RevealText myNumber={myNumber} isHovered={isHovered} />
				<sup className='text-5xl'>+</sup>
			</h1>
			<h1 className='self-end text-4xl font-extralight font-blatant'>Projects</h1>
		</div>
	);
};

export default Card;
