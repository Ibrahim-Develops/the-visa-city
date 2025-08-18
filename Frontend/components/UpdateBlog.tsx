'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';

type BlogFormInputs = {
  title: string;
  description: string;
  image?: FileList;
};

const UpdateBlog = () => {
  const params = useParams();
  const id = params?.id?.toString();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormInputs>();

  const [existingImage, setExistingImage] = useState<string | null>(null);
  const [blogData, setBlogData] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem('token')?.replace(/"/g, '') || '';
        const res = await axios.get(`https://api.thevisacity.com/blog/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const blog = res.data.data;
        setBlogData(blog);
        setValue('title', blog.title);
        setValue('description', blog.description);
        setExistingImage(blog.image);
      } catch (err) {
        console.error('Error fetching blog:', err);
        toast.error('Failed to fetch blog');
      }
    };

    if (id) fetchBlog();
  }, [id, setValue]);

  const onSubmit = async (data: BlogFormInputs) => {
    const token = localStorage.getItem('token')?.replace(/"/g, '') || '';
    const form = new FormData();

    form.append('title', data.title.trim());
    form.append('description', data.description.trim());

    if (data.image?.[0]) {
      form.append('image', data.image[0]);
    }

    try {
      await axios.patch(`http://api.thevisacity.com/blog/update/${id}`, form, {
       withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Blog updated successfully');
      setTimeout(() => router.push('/dashboard/allblogs'), 1500);
    } catch (err) {
      console.error('Update failed:', err);
      toast.error('Update failed');
    }
  };

  if (!blogData) return <p className="text-center py-20 text-white">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex flex-col mb-5 gap-3">
        <Link
          href="/dashboard"
          className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
        >
          <FaArrowLeftLong className="text-white text-2xl" />
        </Link>
        <h1 className="text-3xl font-bold">Blog Details</h1>
      </div>

      {!isEditing ? (
        <>
          <div className="space-y-4 text-lg">
            <p><strong>Title:</strong> {blogData.title}</p>
            <p><strong>Description:</strong> {blogData.description}</p>
            {blogData.image && (
              <img
                src={blogData.image}
                alt="Blog"
                className="h-40 w-full object-cover rounded"
              />
            )}
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 bg-[#FFD700] text-black cursor-pointer px-6 py-2 rounded transition"
          >
            Edit Blog
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            {...register('title', { required: true })}
            placeholder="Blog Title"
            className="w-full p-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">Title is required</p>}

          <textarea
            {...register('description', { required: true })}
            placeholder="Blog Description"
            className="w-full p-2 border rounded"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">Description is required</p>
          )}

          <div>
            <label className="block mb-1 font-medium">Blog Image</label>
            {existingImage && (
              <img
                src={existingImage}
                alt="Blog"
                className="h-24 mb-2 rounded-md object-cover"
              />
            )}
            <input
              type="file"
              {...register('image')}
              accept="image/*"
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#FFD700] text-black px-6 py-2 rounded transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-black text-white px-6 py-2 rounded transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default UpdateBlog;
