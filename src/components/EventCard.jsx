import React from 'react'
import event from "../assets/images/event1.jpg"
import { FaLocationPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const EventCard = () => (
    <div className='flex flex-col min-w-[250px] min-h-[250px] gap-3 shadow-2xl rounded-lg'>
        <div className='w-full h-full overflow-hidden'>
            <img
                src={event}
                className='w-full h-[250px] object-cover rounded-t-lg'
                alt="Event" />
        </div>

        <div className='flex gap-4 flex-col p-2 '>
            <div className='flex flex-col text-[#565656] text-sm'>
                <span>12th July 2025</span>
                <span>7.00PM - 7.00AM</span>
            </div>

            <div className='flex flex-col'>
                <span className='text-lg font-semibold'>Friday Night Rave</span>
                <span className='text-[#565656] flex items-center gap-1'><FaLocationPin /> Colombo</span>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col text-[#565656] font-semibold'>
                    <span className='text-sm'>4000LKR</span>
                    <span className='text-xs'>UPWARDS</span>
                </div>

                <Link className='border-2 bg-black hover:border-black p-3 rounded-lg text-white text-sm'>Book Now</Link>
            </div>
        </div>

    </div>
)

export default EventCard
