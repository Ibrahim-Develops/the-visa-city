'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { BsThreeDots } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const TableHeadData = [
  "Main Image",
  "Extra Img 1",
  "Extra Img 2",
  "Flag",
  "Name",
  "Price",
];

const Dashboard = () => {
  return (
    <div className="px-4 sm:px-10 py-10 h-[89vh] overflow-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Countries</h1>
        <Link
          href="/dashboard/adduser"
          className="bg-[#072343] px-6 sm:px-16 py-3 sm:py-4 text-white rounded-xl font-bold text-center"
        >
          + Add User
        </Link>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-auto">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              {TableHeadData.map((title, idx) => (
                <TableHead key={idx} className="text-[#707070cb] whitespace-nowrap">{title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                      <BsThreeDots />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-32 p-2 flex flex-col gap-2">
                    <button className="text-blue-500 text-sm font-semibold hover:underline">Update</button>
                    <button className="text-red-500 text-sm font-semibold hover:underline">Delete</button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard
