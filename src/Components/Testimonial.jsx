import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialQuote from './TestimonalQuote';

const Testimonial = () => {
	return (
		<>
			<div className='max-w-[1200px] m-auto flex justify-between w-full mb-10'>
				<h1 className='text-5xl'>Testimonial</h1>
				<div className='flex gap-6'>
					<FaArrowLeft />
					<FaArrowRight  />
				</div>
			</div>
			<div>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialQuote />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Testimonial;
