'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type FormData = {
  name: string
  email: string
  phone: number
  subject: string
  message: string
}

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post('https://api.thevisacity.com/contact/add', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.data?.status === true) {
        toast.success('Message sent successfully!', { autoClose: 3000 })
        reset()
      } else {
        toast.error('Something went wrong. Try again later.', { autoClose: 3000 })
      }
    } catch (error) {
      toast.error('Network error. Please try again.', { autoClose: 3000 })
      console.error('Submission error:', error)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8 md:px-16 lg:px-20 py-12">
      <ToastContainer position="bottom-left" autoClose={3000} theme="dark" style={{ zIndex: 999999 }} />

      <div className="flex-1 z-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD700]">We’re Here to Help You</h2>
        <p className="text-white mb-6 text-sm sm:text-base">
          Contact us for visa consultation, travel guidance, or sponsorship services.
        </p>

        <div className="mb-4 text-white text-sm sm:text-base">
          <h3 className="font-semibold text-lg text-[#FFD700]">Office Address</h3>
          <p className="mb-2">
            19th Floor, Damac Executive Heights, Al Barsha Heights, Dubai, UAE
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <FaWhatsapp className="text-[#FFD700]" />
            <span>+971-54-7499849</span>
            <span className="hidden sm:inline">&nbsp;||&nbsp;</span>
            <span>+971-58-5669976</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <FaPhoneAlt className="text-[#FFD700]" />
            <span>+971-54-7499849</span>
            <span className="hidden sm:inline">&nbsp;||&nbsp;</span>
            <span>+971-58-5669976</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-[#FFD700]" />
            <span>info@thevisacity.com</span>
          </div>
        </div>
      </div>

      <div className="flex-1 z-20 bg-black border p-6 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#FFD700]">Leave Your Message</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-white" noValidate>
          <input
            type="text"
            placeholder="Enter Your Name"
            className={`p-2 border rounded bg-black text-white placeholder-gray-400 text-sm sm:text-base ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Enter Your Email"
            className={`p-2 border rounded bg-black text-white placeholder-gray-400 text-sm sm:text-base ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

          <input
            type="tel"
            placeholder="Enter Your Contact"
            className={`p-2 border rounded bg-black text-white placeholder-gray-400 text-sm sm:text-base ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('phone', { required: 'Phone number is required' })}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

          <input
            type="text"
            placeholder="Type Your Subject"
            className={`p-2 border rounded bg-black text-white placeholder-gray-400 text-sm sm:text-base ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}

          <textarea
            rows={4}
            placeholder="Your Special Requirements"
            className={`p-2 border rounded bg-black text-white placeholder-gray-400 text-sm sm:text-base ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#FFD700] text-black font-bold cursor-pointer py-2 rounded transition hover:bg-yellow-400 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
