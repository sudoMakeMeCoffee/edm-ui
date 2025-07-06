import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";

const CreateOrganizationForm = () => {
  const fileInputRef = useRef();
  
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("name", formData.name);
    data.append("image", formData.image);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/organization",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col items-center gap-3 w-full"
    >
      <div className="w-full border rounded-xl px-5 py-3">
        <input
          type="text"
          name="name"
          placeholder="Organization Name"
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-row items-center border rounded-xl px-5 py-3 gap-2 w-full">
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
          Logo: .jpg, .jpeg, .png
        </p>
      </div>
      <button type="submit" className="w-full border rounded-xl px-5 py-3">
        Create Organization
      </button>
    </form>
  );
};

export default CreateOrganizationForm;
