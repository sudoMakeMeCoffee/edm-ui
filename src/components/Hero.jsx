import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Hero = () => (
    <div className='w-full min-h-[600px] hero flex flex-col justify-center items-center gap-4'>
        <h1 className='text-white text-6xl font-black '>Feel the Drop Live</h1>
        <p className='text-white text-2xl'>Grab your tickets to the hottest EDM festivals and raves</p>
        <form className=' bg-white w-fit px-5 py-3 rounded-md flex items-center mt-2 justify-between border-2 border-black'>
            <input type="text" placeholder='Serach Events..' className='text-2xl'/>
            <button type="submit" className='hover:border-none'><FaMagnifyingGlass className='text-2xl'/></button>
        </form>
    </div>


)

export default Hero
