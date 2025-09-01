'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoTrashBinOutline } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useRouter } from 'next/navigation';

interface Story {
  id: number;
  image: string;
  createdAt?: string;
}

const AllStories = () => {
  const router = useRouter();
  const [stories, setStories] = useState<Story[]>([]);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const token = localStorage.getItem('token')?.replace(/"/g, '') || '';
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stories/all`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setStories(res.data);
      } catch (error) {
        console.error('Failed to fetch stories:', error);
        toast.error('Error fetching stories');
      }
    };

    fetchStories();
  }, []);

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this story?');
    if (!confirm) return;

    try {
      const token = localStorage.getItem('token')?.replace(/"/g, '') || '';
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/stories/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStories((prev) => prev.filter((story) => story.id !== id));
      toast.success('Story deleted successfully');
    } catch (error) {
      console.error('Failed to delete story:', error);
      toast.error('Error deleting story');
    }
  };

  if (isAuthorized === null) return null;

  return (
    <div className="px-4 sm:px-10 py-10 overflow-auto bg-white text-black min-h-screen">
      <div className="flex flex-col gap-3 mb-5">
        <Link
          href="/dashboard"
          className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
        >
          <FaArrowLeftLong className="text-white text-2xl" />
        </Link>
        <h1 className="text-5xl font-bold">All Stories</h1>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-auto">
        <Table>
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {stories.map((story, i) => (
              <TableRow key={story.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <img
                    src={story.image}
                    alt={`Story ${story.id}`}
                    className="w-20 h-14 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="flex items-center mt-4">
                  <IoTrashBinOutline
                    className="text-2xl text-red-500 cursor-pointer hover:text-red-700 transition"
                    onClick={() => handleDelete(story.id)}
                  />
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

export default AllStories;
