'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Logo from '../public/logo2.png';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  userName: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post("http://localhost:3000/user/login", data, { withCredentials: true });
      console.log(res.data);
      
      if (res.data.status) {
        toast.success(res.data.message);
        localStorage.setItem("token", JSON.stringify(res.data.data.token));
        setTimeout(() => router.push('/dashboard'), 500);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    }
  };

  return (
    <>
      <div className="h-[90vh] flex items-center justify-center">
        <div className="bg-black border p-8 rounded-2xl shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#FFD700]">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder='Enter Username'
                {...register('userName', { required: 'Username is required' })}
                className={`mt-1 w-full px-4 py-2 border text-white ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.userName && (
                <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  placeholder='Enter Password'
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { required: 'Password is required' })}
                  className={`mt-1 w-full px-4 py-2 border text-white ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-10`}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[50%] transform -translate-y-1/2 text-white cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#FFD700] cursor-pointer text-black font-bold rounded-md transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default Login;
