'use client'

import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { BsThreeDots } from 'react-icons/bs'
import Image from 'next/image'
import { IoTrashBinOutline } from "react-icons/io5";
import Link from 'next/link'
import Finland from '../assets/finland.webp'
import fi from '../assets/fi.png'
import fr from '../assets/fr.png'

const TableHeadData = [
  "Main Image",
  "Extra Img 1",
  "Extra Img 2",
  "Flag",
  "Name",
  "Price",
  "",
];

const Dashboard = () => {
  return (
    <div className="px-4 sm:px-10 py-10 h-[89vh] overflow-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Countries</h1>
        <Link
          href="/dashboard/addcountry"
          className="bg-[#072343] px-6 sm:px-16 py-3 sm:py-4 text-white rounded-xl font-bold text-center"
        >
          + Add Country
        </Link>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-auto">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              {TableHeadData.map((title, idx) => (
                <TableHead key={idx} className="text-[#707070cb] bg-gray-200 whitespace-nowrap">{title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <Image
                  src={Finland}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>
                <Image
                  src={Finland}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>
                <Image
                  src={Finland}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </TableCell>
              <TableCell>
                <Image
                  src={fi}
                  alt="Avatar"
                  width={100}
                  height={100}
                  className="object-cover border-[1px] border-gray-400"
                />
              </TableCell>
              <TableCell>Finland</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>
                <IoTrashBinOutline className='text-2xl text-red-500 cursor-pointer'/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard
