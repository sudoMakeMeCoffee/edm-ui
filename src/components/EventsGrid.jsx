import React from 'react'
import EventCard from './EventCard'
const EventsGrid = () => {
  return (
    <section className='main-wrapper'>
      <h1 className='font-black text-4xl mb-10'>Latest <span className='font-light'>Events</span></h1>

      <div className='grid grid-cols-4 w-full gap-6 gap-y-6'>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </section>
  )
}

export default EventsGrid
