import { useState } from "react";
import axios from "axios";
import CreateOrganizationForm from "../components/CreateOrganizationForm";

const CreateOrganization = () => {
  return (
    <section className="main-wrapper flex flex-col items-center justify-center gap-[50px]  w-full h-full">
      <h1 className="text-4xl font-bold ">Create Your Organization</h1>
      <CreateOrganizationForm />
    </section>
  );
};

export default CreateOrganization;
