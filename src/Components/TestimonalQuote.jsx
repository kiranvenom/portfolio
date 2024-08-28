import React from 'react';

const TestimonalQuote = ({ src, quote, name }) => {
	return (
		<>
			<div className='border h-[30vh] flex justify-center items-center flex-col rounded-3xl'>
				<q>{quote}</q>
				<div className='w-[70px] h-[70px] bg-red-300 rounded-full overflow-hidden my-6'>
					<img
						className='w-full h-full object-cover'
						src={src}
						alt='image'
					/>
				</div>
				<h1>{name}</h1>
			</div>
		</>
	);
};

export default TestimonalQuote;
