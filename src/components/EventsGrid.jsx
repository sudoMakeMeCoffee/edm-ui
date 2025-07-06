import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import axios from "axios";
const EventsGrid = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events", { withCredentials: true })
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="main-wrapper">
      <h1 className="font-black text-4xl mb-10">
        Latest <span className="font-light">Events</span>
      </h1>

      <div className="grid grid-cols-4 w-full gap-6 gap-y-6">
        {events.map((event, i) => (
          <EventCard key={i} event={event}/>
        ))}
      </div>
    </section>
  );
};

export default EventsGrid;
