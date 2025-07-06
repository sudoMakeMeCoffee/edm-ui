import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrganizationHeader = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/organizer/organization", {
        withCredentials: true,
      })
      .then((res) => setData(res.data))
      .catch((err) => navigate("/organization/create"));
  }, []);

  return (
    <section className="main-wrapper flex gap-3 items-center">
      <img
        src={`http://localhost:8080/uploads/${data.image}`}
        alt={data.name}
        className="w-[100px] h-100px rounded-full"
      />
      <div>
        <h1 className="text-2xl font-black">{data.name}</h1>
        <div className="flex flex-col">
          <span className="font-bold">{data.organizerName}</span>
          <span className="text-sm">24 Events</span>
        </div>
      </div>
    </section>
  );
};

export default OrganizationHeader;
