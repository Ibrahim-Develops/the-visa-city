'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoTrashBinOutline } from 'react-icons/io5'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import * as XLSX from 'xlsx' // ✅ Import xlsx

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
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.replace("/login")
    } else {
      setIsAuthorized(true)
    }
  }, [router])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "") || ""
        const res = await axios.get('http://localhost:3000/contact/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

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
    const confirmDelete = window.confirm('Are you sure you want to delete this message?')
    if (!confirmDelete) return

    try {
      await axios.delete(`http://localhost:3000/contact/delete/${id}`)
      setMessages((prev) => prev.filter((msg) => msg.id !== id))
      toast.success('Message deleted successfully.')
    } catch (error) {
      console.error('Delete error:', error)
      toast.error('Failed to delete the message.')
    }
  }

  const handleDownloadExcel = () => {
    if (messages.length === 0) {
      toast.warn("No messages to download")
      return
    }

    const worksheet = XLSX.utils.json_to_sheet(messages)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Messages")

    XLSX.writeFile(workbook, "messages.xlsx")
  }

  if (isAuthorized === null) return null

  return (
    <div className="px-4 sm:px-10 py-10 overflow-auto text-black min-h-screen">
      <div className="flex flex-col gap-3 mb-5">
        <Link
          href="/dashboard"
          className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
        >
          <FaArrowLeftLong className="text-white text-2xl" />
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold">Messages</h1>
          <button
            onClick={handleDownloadExcel}
            className="bg-green-600 cursor-pointer duration-300 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Download Excel
          </button>
        </div>
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
