import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventsGrid from '../components/EventsGrid'
import axios from 'axios'

const Home = () => {


  // const callAPi = async () => {
  //   const res = await axios.get("http://localhost:8080/api", {withCredentials: true})

  //   console.log(res)
  // }

  // useEffect(() => {
  //   callAPi();
  // }, [])

  return (
    <div>
      <Hero/>
      <EventsGrid/>
    </div>
  )
}

export default Home
