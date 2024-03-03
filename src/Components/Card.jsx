import React from 'react';

const Card = () => {
	return (
		<>
			<div className='p-8 m-4 rounded-lg flex flex-col justify-between h-[35vh] bg-[#131a2a] card'>
				<h1 className='text-8xl'>
					20<sup>+</sup>
				</h1>
				<h1 className='self-end text-4xl font-extralight'>Projects</h1>
			</div>
		</>
	);
};

export default Card;
