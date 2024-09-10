import React from 'react';

const TestimonalQuote = ({ src, quote, name }) => {
	return (
		<>
			<div className='border border-[#293452] bg-[#131a2b] h-[30vh] flex justify-center items-center flex-col rounded-xl transition-all'>
				<h1>{name}</h1>
				<div className='w-[70px] h-[70px] bg-red-300 rounded-full overflow-hidden my-6'>
					<img
						className='w-full h-full object-cover'
						src={src}
						alt='image'
					/>
				</div>
				<q style={{ fontStyle: 'italic' }} className=' font-blatant'>
					{quote}
				</q>
			</div>
		</>
	);
};

export default TestimonalQuote;
