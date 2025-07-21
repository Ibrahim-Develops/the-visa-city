'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { IoTrashBinOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableHeadData = [
  "id",
  "Main Image",
  "Extra Img 1",
  "Extra Img 2",
  "Flag",
  "Name",
  "Price",
  "Category",
  "Region",
  "Delete",
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
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null); // To check token state

  // Check token on first render
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace('/login');  // Redirect if no token
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  // Fetch countries if authorized
  useEffect(() => {
    if (!isAuthorized) return;

    const fetchCountries = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        const res = await axios.get("http://localhost:3000/country/all", {
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
      await axios.delete(`http://localhost:3000/country/delete/${id}`, {
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
      width={100}
      height={100}
      className="rounded-full object-cover border border-gray-200"
    />
  );

  if (isAuthorized === null) return null;

  return (
    <div className="px-4 sm:px-10 py-10 overflow-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Countries</h1>
        <Link
          href="/dashboard/addcountry"
          className="bg-[#072343] px-6 sm:px-16 py-3 sm:py-4 text-white rounded-xl font-bold text-center hover:bg-[#0a2f64] transition"
        >
          + Add Country
        </Link>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-auto">
        {loading ? (
          <p className="p-4 text-center text-gray-500">Loading countries...</p>
        ) : countries.length === 0 ? (
          <p className="p-4 text-center text-gray-500">No countries found.</p>
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
              {countries.map((country) => (
                <TableRow key={country.id}>
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
                    <IoTrashBinOutline
                      className="text-2xl text-red-500 cursor-pointer hover:text-red-700 transition"
                      onClick={() => handleDelete(country.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default Dashboard;