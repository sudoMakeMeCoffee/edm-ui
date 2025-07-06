import axios from "axios";
import React, { useRef, useState } from "react";

const CreateEventForm = () => {
  const fileInputRef = useRef();

  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    venue: "",
    date: "",
    description: "",
    timeFrom: "",
    timeTo: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("title", formData.title);
    data.append("price", formData.price);
    data.append("venue", formData.venue);
    data.append("date", formData.date);
    data.append("description", formData.description);
    data.append("timeFrom", formData.timeFrom);
    data.append("timeTo", formData.timeTo);
    data.append("image", formData.image);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/organizer/event",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-full"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-3 ">
        <div className="flex flex-row items-center border rounded-xl px-5 py-3 w-full">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row items-center border rounded-xl px-5 py-3 w-full">
          <input
            type="number"
            placeholder="Price"
            name="price"
            required
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row items-center border rounded-xl px-5 py-3 w-full">
          <input type="date" name="date" id="" onChange={handleChange} />
        </div>
      </div>

      <div className="flex flex-row items-center border rounded-xl px-5 py-3 gap-2">
        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          onChange={handleChange}
          ref={fileInputRef}
        />
        <button
          onClick={handleClick}
          className="border border-black text-black text-sm  py-2 px-4 rounded-lg"
        >
          Upload Image
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Event Poster: .jpg, .jpeg, .png
        </p>
      </div>

      <textarea
        name="description"
        id=""
        placeholder="Event Description"
        className="border rounded-xl px-5 py-3"
        rows={5}
        required
        onChange={handleChange}
      ></textarea>

      <div className="flex gap-2">
        <div className="flex flex-row gap-3 items-center border rounded-xl px-5 py-3 w-full">
          <span>From</span>
          <input
            type="time"
            name="timeFrom"
            id=""
            className=""
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row gap-3 items-center border rounded-xl px-5 py-3 w-full">
          <span>To</span>
          <input
            type="time"
            name="timeTo"
            id=""
            className=""
            onChange={handleChange}
          />
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
