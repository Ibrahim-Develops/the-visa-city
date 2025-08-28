'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IoTrashBinOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableHeadData = [
  "Id", "CountryId", "Main Image", "Extra Img 1", "Extra Img 2", "Flag", "Name", "Price", "Category", "Region", "Update", "Delete",
];

interface Country {
  id: number;
  name: string;
  price: string;
  category: string;
  region: string;
  flag: string;
  mainImage: string;
  extraImg1: string;
  extraImg2: string;
}

const Dashboard = () => {
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  useEffect(() => {
    if (!isAuthorized) return;

    const fetchCountries = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/country/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (Array.isArray(res.data.data)) {
          setCountries(res.data.data);
        } else {
          setCountries([]);
          toast.warn("No countries found.");
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
        toast.error("Failed to fetch countries. Try again!");
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [isAuthorized]);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this country?")) return;
    try {
      const token = localStorage.getItem("token")?.replace(/"/g, "");
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/country/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCountries((prev) => prev.filter((c) => c.id !== id));
      toast.success("Country deleted successfully!");
    } catch (error) {
      console.error("Error deleting country:", error);
      toast.error("Failed to delete the country.");
    }
  };

  const ImageCell = ({ src, alt }: { src: string; alt: string }) => (
    <Image
      src={src || '/placeholder.png'}
      alt={alt}
      width={80}
      height={80}
      className="rounded-full object-cover border border-gray-200"
    />
  );

  if (isAuthorized === null) return null;

  return (
    <div className="px-4 sm:px-10 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Countries</h1>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard/messages" className="bg-black px-6 py-3 text-white rounded-xl font-bold">Messages</Link>
          <Link href="/dashboard/allsteps" className="bg-black px-6 py-3 text-white rounded-xl font-bold">All Steps</Link>
          <Link href="/dashboard/allblogs" className="bg-black px-6 py-3 text-white rounded-xl font-bold">All Blogs</Link>
          <Link href="/dashboard/addblog" className="bg-black px-6 py-3 text-white rounded-xl font-bold">+ Add Blogs</Link>
          <Link href="/dashboard/addcountry" className="bg-black px-6 py-3 text-white rounded-xl font-bold">+ Add Country</Link>
        </div>
      </div>

      <div className="hidden md:block border border-gray-200 rounded-lg overflow-x-auto">
        {loading ? (
          <p className="p-4 text-center">Loading countries...</p>
        ) : countries.length === 0 ? (
          <p className="p-4 text-center">No countries found.</p>
        ) : (
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                {TableHeadData.map((title, idx) => (
                  <TableHead key={idx} className="text-[#707070cb] bg-gray-200 whitespace-nowrap">
                    {title}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {countries.map((country, i) => (
                <TableRow key={country.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{country.id}</TableCell>
                  <TableCell><ImageCell src={country.mainImage} alt={country.name} /></TableCell>
                  <TableCell><ImageCell src={country.extraImg1} alt={country.name} /></TableCell>
                  <TableCell><ImageCell src={country.extraImg2} alt={country.name} /></TableCell>
                  <TableCell><ImageCell src={country.flag} alt="Flag" /></TableCell>
                  <TableCell>{country.name}</TableCell>
                  <TableCell>{country.price}</TableCell>
                  <TableCell>{country.category}</TableCell>
                  <TableCell>{country.region}</TableCell>
                  <TableCell>
                    <Link href={`/dashboard/updatecountry/${country.id}`}>
                      <FaRegEdit className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <IoTrashBinOutline
                      className="text-2xl text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => handleDelete(country.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <div className="md:hidden space-y-4">
        {loading ? (
          <p className="text-center">Loading countries...</p>
        ) : countries.length === 0 ? (
          <p className="text-center">No countries found.</p>
        ) : (
          countries.map((country, i) => (
            <div key={country.id} className="border border-gray-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-3">
                <ImageCell src={country.mainImage} alt={country.name} />
                <div>
                  <h2 className="font-bold">{country.name}</h2>
                  <p className="text-sm text-gray-500">{country.category} • {country.region}</p>
                  <p className="font-semibold">{country.price}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <Link href={`/dashboard/updatecountry/${country.id}`} className="flex items-center gap-1 text-blue-500"><FaRegEdit /> Edit</Link>
                <button onClick={() => handleDelete(country.id)} className="flex items-center gap-1 text-red-500"><IoTrashBinOutline /> Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default Dashboard;
