'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoTrashBinOutline } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'

interface Message {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt?: string
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get('http://localhost:3000/contact/all')
        if (Array.isArray(res.data.data)) {
          setMessages(res.data.data)
        } else {
          toast.warn('No messages found.')
        }
      } catch (error) {
        console.error('Error fetching messages:', error)
        toast.error('Failed to fetch messages.')
      } finally {
        setLoading(false)
      }
    }

    fetchMessages()
  }, [])

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Are you sure you want to delete this message?')
    if (!confirm) return

    try {
      await axios.delete(`http://localhost:3000/contact/delete/${id}`)
      setMessages((prev) => prev.filter((msg) => msg.id !== id))
      toast.success('Message deleted successfully.')
    } catch (error) {
      console.error('Delete error:', error)
      toast.error('Failed to delete the message.')
    }
  }

  return (
    <div className="px-4 sm:px-10 py-10 overflow-auto">
      <div className="flex flex-col gap-3 mb-5">
        <Link
          href="/dashboard"
          className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
        >
          <FaArrowLeftLong className="text-white text-2xl" />
        </Link>
        <h1 className="text-5xl font-bold">Messages</h1>
      </div>
      {loading ? (
        <p className="text-center p-4">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-center p-4">No messages found.</p>
      ) : (
        <div className="border border-gray-200 rounded-lg overflow-auto">
          <Table>
            <TableHeader className="bg-gray-200">
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {messages.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell>{msg.id}</TableCell>
                  <TableCell>{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell>{msg.phone}</TableCell>
                  <TableCell>{msg.subject}</TableCell>
                  <TableCell>{msg.message}</TableCell>
                  <TableCell>
                    <IoTrashBinOutline
                      className="text-2xl text-red-500 cursor-pointer hover:text-red-700 transition"
                      onClick={() => handleDelete(msg.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  )
}

export default Messages
