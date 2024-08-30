import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialQuote from './TestimonalQuote';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';

const Testimonial = () => {
	return (
		<>
			<div className='max-w-[1200px] m-auto flex justify-between w-full mb-10'>
				<h1 className='text-5xl'>Testimonial</h1>
				<div className='flex gap-6'>
					<FaArrowLeft className='cursor-pointer left w-[40px] border h-[40px] p-3 rounded-full hover:scale-110 transition-all' />
					<FaArrowRight className='cursor-pointer right w-[40px] border h-[40px] p-3 rounded-full hover:scale-110 transition-all' />
				</div>
			</div>
			<div className='testimonalSection'>
				<Swiper
					spaceBetween={20}
					slidesPerView={3}
					loop={true}
					autoplay={{
						delay: 1000,
					}}
					speed={1000}
					navigation={{ nextEl: '.left', prevEl: '.right' }}
					modules={[Autoplay, Navigation]}>
					<SwiperSlide>
						<TestimonialQuote
							quote='simple and good looking website'
							src='src/assets/images/prakash.jpg'
							name='Prakash - Neras Tech'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote
							quote='good edu website'
							src='src/assets/images/nandish.jpg'
							name='Nandish - Bhanusutha Academy'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote
							quote='good website'
							src='src/assets/images/krishna.jpg'
							name='Krishna - webtech solution'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote
							quote='surely work with you again'
							src='src/assets/images/skeltron.jpg'
							name='Zeeshan - Skeltron Info Tech'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote
							quote='cool web design and development'
							src='src/assets/images/khedda.jpg'
							name='Vijay - Khedda Resorts'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Testimonial;
