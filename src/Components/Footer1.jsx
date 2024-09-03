import React from 'react';
import Footer from './Footer';

export default function Footer1() {
	return (
		<div
			className='relative h-[70vh] bg-[#121315]'
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
			<div className='fixed bottom-0 h-[70vh] w-full'>
				<Footer />
			</div>
		</div>
	);
}
