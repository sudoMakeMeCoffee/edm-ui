import React, { useRef, useState } from "react";
import CreateEventForm from "../components/CreateEventForm";

const CreateEvent = () => {
  
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen mt-[50px]">
      <CreateEventForm/>
    </section>
  );
};

export default CreateEvent;
