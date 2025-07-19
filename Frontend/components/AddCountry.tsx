"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCashOutline } from "react-icons/io5";
import { GrGlobe } from "react-icons/gr";
import { CiFlag1, CiImageOn } from "react-icons/ci";
import { FaCheckToSlot } from "react-icons/fa6";
import axios from "axios";

interface FormValues {
  countryName: string;
  visaAmount: string;
  category: string;
  countryflag: FileList;
  countrydisplayimage: FileList;
  countryextraimage1: FileList;
  countryextraimage2: FileList;
}

const fields: {
  label: string;
  name: keyof FormValues;
  placeholder: string;
  requiredMessage: string;
  icon: JSX.Element;
  type?: string;
}[] = [
  {
    label: "Country Name",
    name: "countryName",
    placeholder: "Enter country name",
    requiredMessage: "Country Name Is Required",
    icon: <GrGlobe className="text-2xl" />,
  },
  {
    label: "Visa Amount",
    name: "visaAmount",
    placeholder: "Enter visa amount",
    requiredMessage: "Visa Amount is required",
    icon: <IoCashOutline className="text-2xl" />,
  },
  {
    label: "Country Flag",
    name: "countryflag",
    placeholder: "",
    requiredMessage: "Country Flag Is Required",
    icon: <CiFlag1 className="text-2xl" />,
    type: "file",
  },
  {
    label: "Country Display Image",
    name: "countrydisplayimage",
    placeholder: "",
    requiredMessage: "Country Display Image Is Required",
    icon: <CiImageOn className="text-2xl" />,
    type: "file",
  },
  {
    label: "Country Extra Image1",
    name: "countryextraimage1",
    placeholder: "",
    requiredMessage: "Country Extra Image1 Is Required",
    icon: <CiImageOn className="text-2xl" />,
    type: "file",
  },
  {
    label: "Country Extra Image2",
    name: "countryextraimage2",
    placeholder: "",
    requiredMessage: "Country Extra Image2 Is Required",
    icon: <CiImageOn className="text-2xl" />,
    type: "file",
  },
];

const AddCountry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    try {
      const formData = new FormData();
      formData.append("name", data.countryName);
      formData.append("price", data.visaAmount);
      formData.append("category", data.category);
      formData.append("flag", data.countryflag[0]);
      formData.append("mainImage", data.countrydisplayimage[0]);
      formData.append("extraImg1", data.countryextraimage1[0]);
      formData.append("extraImg2", data.countryextraimage2[0]);

      const rawToken = localStorage.getItem("token");
      const token = rawToken ? rawToken.replace(/"/g, "") : "";

      const res = await axios.post("http://localhost:3000/country/create", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201 || res.status === 200) {
        toast.success("Country added successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add country. Please try again.");
    }
  };

  return (
    <div className="px-10 py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="bg-[#072343] w-fit p-2 rounded-full shadow-2xl cursor-pointer"
            >
              <FaArrowLeftLong className="text-white text-2xl" />
            </Link>
            <h1 className="text-5xl font-bold">Country</h1>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-2xl">Welcome To The Country Page</h2>
              <p className="text-gray-600 text-[15px]">
                All Fields Are Compulsory To Add a Country{" "}
                <span className="text-red-600">*</span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#072343] px-16 py-4 text-white rounded-xl font-bold cursor-pointer"
            >
              Add Country
            </button>
          </div>

          <div className="grid grid-cols-3 w-full gap-10">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-lg">Category</label>
              <div className="border-[1px] border-gray-300 flex items-center gap-3 p-4 rounded-lg">
                <FaCheckToSlot className="text-2xl" />
                <select
                  className="outline-none w-full bg-transparent"
                  {...register("category", { required: "Country Category is required" })}
                >
                  <option value="">Select Category</option>
                  <option value="Tropical">Tropical</option>
                  <option value="Historic">Historic</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category.message}</p>
              )}
            </div>

            {fields.map((field, i) => (
              <div key={i} className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-lg">{field.label}</label>
                <div className="border-[1px] border-gray-300 flex items-center gap-3 p-4 rounded-lg">
                  {field.icon}
                  <input
                    type={field.type || "text"}
                    accept={field.type === "file" ? "image/*" : undefined}
                    className="outline-none w-full"
                    {...register(field.name, {
                      required: field.requiredMessage,
                    })}
                  />
                </div>
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]?.message}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default AddCountry;
