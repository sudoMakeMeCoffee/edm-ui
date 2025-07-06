import React from 'react'
import { FaLocationPin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import {formatDate, formatTime, truncateStr} from "../utils/utils"

const EventCard = ({event}) => (
    <div className='flex flex-col min-w-[250px] min-h-[250px] gap-3 shadow-2xl rounded-lg'>
        <div className='w-full h-full overflow-hidden'>
            <img
                src={`http://localhost:8080/uploads/${event.image}`}
                className='w-full h-[250px] object-cover rounded-t-lg'
                alt="Event" />
        </div>

        <div className='flex gap-6 flex-col p-2'>
            <div className='flex flex-col text-[#565656] text-sm'>
                <span>{formatDate(event.date)}</span>
                <span>{`${formatTime(event.timeFrom)} - ${formatTime(event.timeTo)}`}</span>
            </div>

            <div className='flex flex-col'>
                <span className='text-lg font-semibold'>{truncateStr(event.title, 20)}</span>
                <span className='text-[#565656] flex items-center gap-1'><FaLocationPin />{truncateStr(event.venue, 25)}</span>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col text-[#565656] font-semibold'>
                    <span className='text-sm'>{event.price}LKR</span>
                    <span className='text-xs'>UPWARDS</span>
                </div>

                <Link className='border-2 bg-black hover:border-black p-3 rounded-lg text-white text-sm'>Book Now</Link>
            </div>
        </div>

    </div>
)

export default EventCard
