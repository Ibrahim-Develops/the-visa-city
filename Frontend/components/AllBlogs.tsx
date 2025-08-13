'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoTrashBinOutline } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useRouter } from 'next/navigation';

interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    createdAt?: string;
}

const AllBlogs = () => {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
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
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem('token')?.replace(/"/g, '') || '';
                const res = await axios.get('https://13.61.35.24:3000/blog/all', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBlogs(res.data.data);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
                toast.error('Error fetching blogs');
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id: number) => {
        const confirm = window.confirm('Are you sure you want to delete this blog?');
        if (!confirm) return;

        try {
            const token = localStorage.getItem('token')?.replace(/"/g, '') || '';
            await axios.delete(`https://13.61.35.24:3000/blog/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setBlogs((prev) => prev.filter((blog) => blog.id !== id));
            toast.success('Blog deleted successfully');
        } catch (error) {
            console.error('Failed to delete blog:', error);
            toast.error('Error deleting blog');
        }
    };

    if (isAuthorized === null) return null;

    return (
        <div className="px-4 sm:px-10 py-10 overflow-auto text-black min-h-screen">
            <div className="flex flex-col gap-3 mb-5">
                <Link
                    href="/dashboard"
                    className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
                >
                    <FaArrowLeftLong className="text-white text-2xl" />
                </Link>
                <h1 className="text-5xl font-bold">All Blogs</h1>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-auto">
                <Table>
                    <TableHeader className="bg-gray-200">
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Update</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {blogs.map((blog, i) => (
                            <TableRow key={blog.id}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{blog.title}</TableCell>
                                <TableCell>{blog.description}</TableCell>
                                <TableCell>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-20 h-14 object-cover rounded-md"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Link href={`/dashboard/updateblog/${blog.id}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        <FaRegEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700 transition" />
                                    </Link>
                                </TableCell>
                                <TableCell className="flex items-center mt-4">
                                    <div>

                                        <IoTrashBinOutline
                                            className="text-2xl text-red-500 cursor-pointer hover:text-red-700 transition"
                                            onClick={() => handleDelete(blog.id)}
                                        />
                                    </div>
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

export default AllBlogs;