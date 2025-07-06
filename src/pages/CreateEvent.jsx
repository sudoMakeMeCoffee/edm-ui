import React, { useRef, useState } from "react";
import CreateEventForm from "../components/CreateEventForm";

const CreateEvent = () => {
  
  return (
    <section className="main-wrapper flex flex-col items-center justify-center gap-[50px]  w-full h-full">
      <h1 className="text-4xl font-bold ">Publish New Event</h1>
      <CreateEventForm/>
    </section>
  );
};

export default CreateEvent;
