import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import EventsSlider from '../components/shared/events/EventsSlider';
import api from '../../mock-api';

const Events = () => {
    
    const [ events, setEvents ] = useState({});

    useEffect(() => {
        api.get('/events')
        .then( ( {data: { data: events}} ) => setEvents(_ => events));
    }, [])

    return (
        <div className='h-full w-full pt-4 px-12 bg-initio-green-secondary-light bg-opacity-10 rounded-l-2xl' style={{boxShadow: '-4px 0px 10px 0px rgba(14, 84, 101, 0.30)'}}>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-4xl'>Events Page</h1>
                <div className='relative w-1/3 h-full'>
                    <input type="text" name="search" id="search" placeholder='Search' className='block w-full py-2 pl-2 rounded-2xl border border-[#686868]'/>
                    <Icon icon="ic:round-search" className='w-4 h-4 absolute top-1/4 right-2 mt-1 cursor-pointer text-[#AEAEAE]'/>
                </div>
            </div>

            <hr className='border-t-2 border-t-[##C5C2C2]' />

            <div className='h-full'>
                <div>
                    <h2 className='text-3xl my-6 ml-2'>Upcoming events</h2>
                    <EventsSlider events={events.upcomingEvents} />
                </div>
                <div>
                    <h2 className='text-3xl my-6 ml-2'>Previous events</h2>
                    <EventsSlider events={events.previousEvents} />
                </div>
            </div>
        </div>
    )
}

export default Events