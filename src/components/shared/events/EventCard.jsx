import React from 'react'
import { Img } from 'react-image'

const EventCard = ( { title, description, imageSrc}) => {
  return (
    <>
        <div className='relative p-0.5 flex flex-col justify-end rounded-md bg-gradient-to-r from-initio-green-primary to-initio-green-secondary-light after:absolute after:w-full after:h-1/2 after:bottom-0 after:-z-10 after:backdrop-blur-[1px]'>
            <Img src={imageSrc} alt="mental-health-is-health.svg" className=' rounded-none z-10' />
            <div className='w-full h-1/2 pt-2 z-20 absolute rounded-b-md bottom-0 left-0 flex flex-col justify-start items-center text-white bg-initio-green-primary bg-opacity-50'>
                <h3 className='font-semibold mb-2 text-center md:text-sm lg:text-base xl:text-lg'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </>
  )
}

export default EventCard