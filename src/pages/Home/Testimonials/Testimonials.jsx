import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonials.css'
import Profile from '../../../assets/Frame 16.png';
import Star from '../../../assets/Stars.png';

const Testimonials = () => {
    const testimonialsData = [
    {
      id: 1,
      name: 'Emily Johnson',
      occupation: 'Pediatric Nurse',
      content: 'Easy-to-use platform, diverse cryptocurrency options, and responsive customer support enhance the user experience.',
    },    {
      id: 2,
      name: 'Michael Briggs',
      occupation: 'Financial Analyst',
      content: 'Innovative features, competitive exchange rates, and comprehensive educational resources make this site a top choice.',
    },    {
      id: 3,
      name: 'Jennifer Smith',
      occupation: 'Event Planner',
      content: 'Sleek interface, reliable transactions, and robust security measures make this crypto site a standout. Would definately recommend.',
    },
    ];

    return (
        <div className='testimonials section__padding'>
            <div className="testimonial-header">
                <h1 className="headtext__cormorant">Testimonials From <span className="span">CREST HOLDINGS</span> Members</h1>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        250: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        695: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        },
                        1440: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"  
                    modules={[Autoplay, Pagination]}
                >
                    {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className='testimonial-swiper'>
                        <div className="img">
                            <img src={Profile} alt={`Profile of ${testimonial.author}`} />
                        </div>
                        <div className="profile">
                            <h5 className="p__opensans">{testimonial.name}</h5>
                            <h6 className="p__cormorant">{testimonial.occupation}</h6>
                        </div><div className="content">
                            <p className="p__opensans">{testimonial.content}</p>
                            <img src={Star} alt="stars" />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;