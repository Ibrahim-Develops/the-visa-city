"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStories = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      toast.error("Please select an image!");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("image", imageFile);

      const token = localStorage.getItem("token")?.replace(/"/g, "") || "";

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/stories/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Story added successfully!");
        setImageFile(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-white text-black min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
          >
            <FaArrowLeftLong className="text-white text-2xl" />
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Add Story
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-semibold text-xl sm:text-2xl">
              Upload Your Story Image
            </h2>
            <p className="text-gray-600 text-sm sm:text-[15px]">
              Only one image is required to create a story{" "}
              <span className="text-red-600">*</span>
            </p>
          </div>
          <button
            type="button"
            className="bg-black w-full sm:w-auto px-8 sm:px-16 py-3 sm:py-4 text-white rounded-xl font-bold"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Story"}
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <label className="font-semibold text-base sm:text-lg">Image</label>
          <div className="border border-gray-300 flex items-center gap-3 p-3 sm:p-4 rounded-lg">
            <CiFlag1 className="text-2xl" />
            <input
              type="file"
              accept="image/*"
              className="outline-none w-full text-sm sm:text-base"
              onChange={handleChange}
            />
          </div>

          {imageFile && (
            <div className="mt-4">
              <p className="text-sm font-medium">Preview:</p>
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                className="w-full max-w-sm h-auto rounded-lg border mt-2"
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default AddStories;
