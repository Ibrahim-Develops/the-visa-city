"use client";

import React, { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCashOutline } from "react-icons/io5";
import { GrGlobe } from "react-icons/gr";
import { CiFlag1, CiImageOn } from "react-icons/ci";
import Select from "react-select";
import axios from "axios";

interface FormValues {
  countryName: string;
  visaAmount: string;
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

const categoryOptions = [
  { value: "eVisa", label: "eVisa" },
  { value: "Trending", label: "Trending" },
  { value: "Tropical", label: "Tropical" },
  { value: "Winter", label: "Winter" },
  { value: "Leisure", label: "Leisure" },
];

const regionOptions = [
  { value: "All", label: "All" },
  { value: "Australia", label: "Australia" },
  { value: "Brazil", label: "Brazil" },
  { value: "South America", label: "South America" },
  { value: "North America", label: "North America" },
  { value: "Africa", label: "Africa" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
];

const AddCountry = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<any[]>([]);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.countryName);
      formData.append("price", data.visaAmount);
      formData.append("category", JSON.stringify(selectedCategories.map((c) => c.value)));
      formData.append("region", JSON.stringify(selectedRegions.map((r) => r.value)));
      formData.append("flag", data.countryflag[0]);
      formData.append("mainImage", data.countrydisplayimage[0]);
      formData.append("extraImg1", data.countryextraimage1[0]);
      formData.append("extraImg2", data.countryextraimage2[0]);

      const rawToken = localStorage.getItem("token");
      const token = rawToken ? rawToken.replace(/"/g, "") : "";

      const res = await axios.post("https://api.thevisacity.com/country/create", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201 || res.status === 200) {
        toast.success("Country added successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add country. Please try again.");
    }
  };

  if (isAuthorized === null) return null;

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 text-black min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
          >
            <FaArrowLeftLong className="text-white text-2xl" />
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Country</h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Welcome To The Country Page
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              All Fields Are Compulsory To Add a Country{" "}
              <span className="text-red-600">*</span>
            </p>
          </div>
          <button
            type="submit"
            className="bg-black w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-3 sm:py-4 text-white rounded-xl font-bold cursor-pointer"
          >
            Add Country
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-lg">Category</label>
          <Select
            isMulti
            options={categoryOptions}
            value={selectedCategories}
            onChange={(selected) => setSelectedCategories(selected as any[])}
            className="border-[1px] border-gray-300 rounded-lg"
          />
          {selectedCategories.length === 0 && (
            <p className="text-red-500 text-sm">
              Please select at least one category
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-lg">Region</label>
          <Select
            isMulti
            options={regionOptions}
            value={selectedRegions}
            onChange={(selected) => setSelectedRegions(selected as any[])}
            className="border-[1px] border-gray-300 rounded-lg"
          />
          {selectedRegions.length === 0 && (
            <p className="text-red-500 text-sm">
              Please select at least one region
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 lg:gap-10">
          {fields.map((field, i) => (
            <div key={i} className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-lg">{field.label}</label>
              <div className="border-[1px] border-gray-300 flex items-center gap-3 p-3 sm:p-4 rounded-lg">
                {field.icon}
                <input
                  type={field.type || "text"}
                  accept={field.type === "file" ? "image/*" : undefined}
                  className="outline-none w-full text-sm sm:text-base"
                  {...register(field.name, {
                    required: field.requiredMessage,
                  })}
                />
              </div>
              {errors[field.name] && (
                <p className="text-red-500 text-sm">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default AddCountry;
