'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.info('Sending your message...', { autoClose: 2000 })

    try {
      const response = await axios.post('http://localhost:3000/contact/add', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.data?.status === true) {
        toast.success('Message sent successfully!', { autoClose: 3000 })
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error('Something went wrong. Try again later.', { autoClose: 3000 })
      }
    } catch (error) {
      toast.error('Network error. Please try again.', { autoClose: 3000 })
      console.error('Submission error:', error)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 px-8 md:px-20 py-16">
      <ToastContainer />

      <div className="flex-1 z-20">
        <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">We’re Here to Help You</h2>
        <p className="text-white mb-6">
          Contact us for visa consultation, travel guidance, or sponsorship services.
        </p>

        <div className="mb-4 text-white">
          <h3 className="font-semibold text-lg text-[#FFD700]">Office Address</h3>
          <p className="mb-2">
            19th Floor, Damac Executive Heights, Al Barsha Heights, Dubai, UAE
          </p>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-[#FFD700]" />
            <span>+971-54-7499849</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-[#FFD700]" />
            <span>+971-58-5669976</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-[#FFD700]" />
            <span>contact@thevisacity.com</span>
          </div>
        </div>
      </div>

      <div className="flex-1 z-20 bg-black border p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Leave Your Message</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
          <input
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
            className="p-2 border border-gray-300 rounded bg-black text-white placeholder-gray-400"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            className="p-2 border border-gray-300 rounded bg-black text-white placeholder-gray-400"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter Your Contact"
            className="p-2 border border-gray-300 rounded bg-black text-white placeholder-gray-400"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Type Your Subject"
            className="p-2 border border-gray-300 rounded bg-black text-white placeholder-gray-400"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows={4}
            required
            placeholder="Your Special Requirements"
            className="p-2 border border-gray-300 rounded bg-black text-white placeholder-gray-400"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-[#FFD700] text-black font-bold cursor-pointer py-2 rounded transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection