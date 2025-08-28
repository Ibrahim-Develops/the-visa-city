"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface Step {
  id: number;
  title: string;
  description: string;
  countryId: number;
}

const AllSteps = () => {
  const router = useRouter();
  const [steps, setSteps] = useState<Step[]>([]);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/steps/all`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Steps API response:", res.data);

        const rawSteps = res.data?.data || res.data?.steps || res.data || [];
        const stepsArray: Step[] = rawSteps.flatMap((item: any) =>
          (item.steps || []).map((s: any, index: number) => ({
            id: index + 1, 
            title: s.title,
            description: s.description,
            countryId: item.id, 
          }))
        );

        setSteps(stepsArray);
      } catch (error) {
        console.error("Failed to fetch steps:", error);
        toast.error("Error fetching steps");
      }
    };

    fetchSteps();
  }, []);

  if (isAuthorized === null) return null;

  return (
    <div className="px-4 sm:px-10 py-10 overflow-auto min-h-screen">
      <div className="flex flex-col gap-3 mb-5">
        <Link
          href="/dashboard"
          className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
        >
          <FaArrowLeftLong className="text-white text-2xl" />
        </Link>
        <h1 className="text-5xl font-bold">All Steps</h1>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-auto">
        <Table>
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Country ID</TableHead>
              <TableHead>Update</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {steps.map((step, i) => (
              <TableRow key={`${step.countryId}-${i}`}>
                <TableCell>{step.id}</TableCell>
                <TableCell>{step.title}</TableCell>
                <TableCell>{step.description}</TableCell>
                <TableCell>{step.countryId}</TableCell>
                <TableCell>
                  <Link
                    href={`/dashboard/updatesteps/${step.countryId}`}
                    className="text-blue-600 hover:underline"
                  >
                    <FaRegEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700 transition" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default AllSteps;
