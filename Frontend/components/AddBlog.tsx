"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";
import { CiFlag1 } from "react-icons/ci";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = [
  {
    label: "Title",
    name: "title",
    placeholder: "Enter blog title",
    icon: <GrGlobe className="text-2xl" />,
    type: "text",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Enter blog description",
    icon: <GrGlobe className="text-2xl" />,
    type: "text",
  },
  {
    label: "Image",
    name: "image",
    placeholder: "",
    icon: <CiFlag1 className="text-2xl" />,
    type: "file",
  },
];

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setImageFile(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.description || !imageFile) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("image", imageFile);

      const token = localStorage.getItem("token")?.replace(/"/g, "") || "";

      const response = await axios.post("https://13.61.35.24:3000/blog/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201 || response.status === 200) {
        toast.success("Blog created successfully!");
        setFormData({ title: "", description: "" });
        setImageFile(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 text-black min-h-screen">
      <div className="flex flex-col gap-6">

        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
          >
            <FaArrowLeftLong className="text-white text-2xl" />
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Blog</h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-2xl">Welcome To The Blog Page</h2>
            <p className="text-gray-600 text-sm sm:text-[15px]">
              All Fields Are Required To Create A Blog{" "}
              <span className="text-red-600">*</span>
            </p>
          </div>
          <button
            type="button"
            className="bg-black w-full sm:w-auto px-8 sm:px-16 py-3 sm:py-4 text-white rounded-xl font-bold"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Blog"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6 sm:gap-8 lg:gap-10">
          {fields.map((field, i) => (
            <div key={i} className="flex flex-col gap-2 w-full">
              <label className="font-semibold text-base sm:text-lg">{field.label}</label>
              <div className="border border-gray-300 flex items-center gap-3 p-3 sm:p-4 rounded-lg">
                {field.icon}
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  accept={field.type === "file" ? "image/*" : undefined}
                  className="outline-none w-full text-sm sm:text-base"
                  name={field.name}
                  onChange={handleChange}
                  value={field.type === "file" ? undefined : (formData as any)[field.name]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default AddBlog;