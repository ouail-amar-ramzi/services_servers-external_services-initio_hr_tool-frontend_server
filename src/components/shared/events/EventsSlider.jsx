import React, { useRef } from 'react'
import EventCard from './EventCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules' 
import { Icon } from '@iconify/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const EventsSlider = ( { events } ) => {
    
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                    disabledClass: 'hidden',
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
               }}
                className="z-10 select-none"
            >
                {
                    events 
                    ? events.map( event => (
                        <SwiperSlide key={event.title}>
                            <EventCard title={event.title} description={event.description} imageSrc={event.imageSrc}/>
                        </SwiperSlide>
                    ))
                    : null
                }

            </Swiper>
            <div ref={navigationPrevRef} className='previous-slide w-fit h-fit z-20 absolute -left-3 top-0 bottom-0 my-auto cursor-pointer'>
                <Icon icon="fe:arrow-left" className='w-8 h-8 p-1 text-white bg-initio-green-primary rounded-full'/>
            </div>
            <div ref={navigationNextRef} className='next-slide w-fit h-fit z-20 absolute -right-3 top-0 bottom-0 my-auto cursor-pointer'>
                <Icon icon="fe:arrow-right" className='w-8 h-8 p-1 text-white bg-initio-green-primary rounded-full'/>
            </div>
        </div>
    )
}

export default EventsSlider