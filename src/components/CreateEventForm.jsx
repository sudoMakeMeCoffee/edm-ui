import React, { useRef, useState } from "react";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      title,
      venue,
      price,
      description,
      date,
      from,
      to
    })

  };
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center gap-3">
        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="flex flex-row items-center border rounded-xl px-5 py-3">
          <input
            type="number"
            placeholder="Price"
            name="price"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-row items-center border rounded-xl px-5 py-3 w-full">
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            required
            onChange={(e) => setVenue(e.target.value)}
            value={venue}
          />
        </div>
        <div className="flex flex-row items-center border rounded-xl px-5 py-3 w-full">
          <input
            type="date"
            name="date"
            id=""
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
      </div>

      <div className="flex flex-row items-center border rounded-xl px-5 py-3 gap-2">
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          ref={fileInputRef}
        />
        <button
          onClick={handleClick}
          className="border border-black text-black text-sm  py-2 px-4 rounded-lg"
        >
          Upload Image
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Accepted formats: .jpg, .jpeg, .png
        </p>
      </div>

      <textarea
        name="description"
        id=""
        placeholder="Event Description"
        className="border rounded-xl px-5 py-3"
        rows={5}
        required
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>

      <div className="flex gap-2">
        <div className="flex flex-row gap-3 items-center border rounded-xl px-5 py-3 w-full">
          <span>From</span>
          <input type="time" name="from" id="" className="" onChange={(e) => setFrom(e.target.value)}
              value={from}/>
        </div>
        <div className="flex flex-row gap-3 items-center border rounded-xl px-5 py-3 w-full">
          <span>To</span>
          <input type="time" name="to" id="" className="" onChange={(e) => setTo(e.target.value)}
              value={to}/>
        </div>
      </div>

      <button
        type="submit"
        className="px-5 py-3 rounded-xl bg-black text-white border border-grey"
      >
        Create Event
      </button>
    </form>
  );
};

export default CreateEventForm;
