import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventsGrid from "../components/EventsGrid";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  // const callAPi = async () => {
  //   try {
  //     await axios.post(
  //       "http://localhost:8080/api/organizer/event",
  //       {
  //         date: "2025-07-11",
  //         description: "dfedferfer",
  //         timeFrom: "05:05",
  //         price: 4000,
  //         title: "Rave Night",
  //         timeTo: "05:05",
  //         venue: "Colombo",
  //       },
  //       { withCredentials: true }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   toast("Wow so easy!");
  // }, []);

  return (
    <div>
      <Hero />
      <EventsGrid />
    </div>
  );
};

export default Home;
