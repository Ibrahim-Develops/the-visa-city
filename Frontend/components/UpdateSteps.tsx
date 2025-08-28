"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

interface StepItem {
  title: string;
  description: string;
}

const UpdateSteps = () => {
  const { id } = useParams();
  const router = useRouter();

  const [steps, setSteps] = useState<StepItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStep = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/steps/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSteps(res.data.steps || []);
      } catch (error) {
        console.error("Error fetching step:", error);
        toast.error("Failed to fetch step data");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchStep();
  }, [id]);

  const handleChange = (
    index: number,
    field: keyof StepItem,
    value: string
  ) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    setSteps(newSteps);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token")?.replace(/"/g, "");
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/steps/update/${id}`,
        { steps },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Steps updated successfully!");
      setTimeout(() => router.push("/dashboard/allsteps"), 1500);
    } catch (error: any) {
      console.error("Error updating steps:", error);
      const msg =
        error?.response?.data?.message?.join(", ") || "Update failed!";
      toast.error(msg);
    }
  };

  if (loading) return <p className="px-20 py-6">Loading...</p>;

  return (
    <div className="px-20 py-6 bg-white min-h-screen w-full">
      <div className="flex flex-col mb-5 gap-3">
        <Link
          href="/dashboard/allsteps"
          className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
        >
          <FaArrowLeftLong className="text-white text-2xl" />
        </Link>
        <h1 className="text-4xl font-bold">Update Steps</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {steps.map((step, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm space-y-3">
            <input
              type="text"
              value={step.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              placeholder="Step Title"
              className="w-full p-2 border rounded"
            />
            <textarea
              value={step.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              placeholder="Step Description"
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-black cursor-pointer text-white px-6 py-3 rounded transition"
        >
          Update Steps
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default UpdateSteps;
