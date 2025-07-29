"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

type CountryFormInputs = {
    name: string;
    price: string;
    mainImage?: FileList;
    extraImg1?: FileList;
    extraImg2?: FileList;
    flag?: FileList;
};

const categoryOptions = [
    { value: "Visa Free", label: "Visa Free" },
    { value: "Quick", label: "Quick" },
    { value: "On Arrival", label: "On Arrival" },
    { value: "eVisa", label: "eVisa" },
    { value: "Short Stay", label: "Short Stay" },
    { value: "Trending", label: "Trending" },
    { value: "Tropical", label: "Tropical" },
    { value: "Winter", label: "Winter" },
    { value: "Leisure", label: "Leisure" },
    { value: "Adventure", label: "Adventure" },
];

const regionOptions = [
    { value: "All", label: "All" },
    { value: "Australia", label: "Australia" },
    { value: "Antarctica", label: "Antarctica" },
    { value: "South America", label: "South America" },
    { value: "Africa", label: "Africa" },
    { value: "Europe", label: "Europe" },
    { value: "Asia", label: "Asia" },
];

const UpdateCountry = () => {
    const { id } = useParams();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<CountryFormInputs>();

    const [selectedCategories, setSelectedCategories] = useState<any[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<any[]>([]);
    const [existingImages, setExistingImages] = useState({
        mainImage: "",
        extraImg1: "",
        extraImg2: "",
        flag: "",
    });

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const token = localStorage.getItem("token")?.replace(/"/g, "");
                const res = await axios.get("http://localhost:3000/country/all", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const country = res.data.data.find((c: any) => c.id === Number(id));
                if (country) {
                    setValue("name", country.name || "");
                    setValue("price", country.price || "");

                    setSelectedCategories(
                        Array.isArray(country.category)
                            ? country.category.map((val: string) => ({
                                label: val,
                                value: val,
                            }))
                            : []
                    );

                    setSelectedRegions(
                        Array.isArray(country.region)
                            ? country.region.map((val: string) => ({
                                label: val,
                                value: val,
                            }))
                            : []
                    );

                    setExistingImages({
                        mainImage: country.mainImage || "",
                        extraImg1: country.extraImg1 || "",
                        extraImg2: country.extraImg2 || "",
                        flag: country.flag || "",
                    });
                } else {
                    toast.error("Country not found");
                }
            } catch (err) {
                console.error(err);
                toast.error("Failed to fetch country data");
            }
        };

        fetchCountry();
    }, [id, setValue]);

    const onSubmit = async (data: CountryFormInputs) => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        const form = new FormData();

        form.append("name", data.name.trim());
        form.append("price", data.price.trim());

        // ✅ Append category values one-by-one
        selectedCategories.forEach((c) => {
            form.append("category", c.value);
        });

        // ✅ Append region values one-by-one
        selectedRegions.forEach((r) => {
            form.append("region", r.value);
        });

        if (data.mainImage?.[0]) form.append("mainImage", data.mainImage[0]);
        if (data.extraImg1?.[0]) form.append("extraImg1", data.extraImg1[0]);
        if (data.extraImg2?.[0]) form.append("extraImg2", data.extraImg2[0]);
        if (data.flag?.[0]) form.append("flag", data.flag[0]);

        // ✅ Debug output
        for (const [key, value] of form.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            await axios.patch(`http://localhost:3000/country/update/${id}`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            toast.success("Country updated successfully!");
            setTimeout(() => router.push("/dashboard"), 1500);
        } catch (err: any) {
            console.error("❌ Axios error:", err);
            const msg = err?.response?.data?.message?.join(", ") || "Update failed!";
            toast.error(msg);
        }
    };


    return (
        <div className="p-6 max-w-3xl mx-auto">
            <div className="flex flex-col mb-5 gap-3">
                <Link
                    href="/dashboard"
                    className="bg-black w-fit p-2 rounded-full shadow-2xl cursor-pointer"
                >
                    <FaArrowLeftLong className="text-white text-2xl" />
                </Link>
                <h1 className="text-4xl font-bold">Update Country</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Country Name"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    {...register("price", { required: true })}
                    placeholder="Visa Amount"
                    className="w-full p-2 border rounded"
                />

                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <Select
                        isMulti
                        options={categoryOptions}
                        value={selectedCategories}
                        onChange={(val) => setSelectedCategories(val as any[])}
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Region</label>
                    <Select
                        isMulti
                        options={regionOptions}
                        value={selectedRegions}
                        onChange={(val) => setSelectedRegions(val as any[])}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {(["mainImage", "extraImg1", "extraImg2", "flag"] as const).map((key) => (
                        <div key={key}>
                            <label className="block capitalize">
                                {key.replace(/([A-Z])/g, " $1")}:
                            </label>
                            {existingImages[key] && (
                                <img src={existingImages[key]} alt={key} className="h-24 mb-2" />
                            )}
                            <input
                                type="file"
                                {...register(key)}
                                accept="image/*"
                            />
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="bg-black cursor-pointer text-white px-6 py-3 rounded hover:bg-gray-800 transition"
                >
                    Update Country
                </button>
            </form>
            <ToastContainer position="top-center" autoClose={1500} />
        </div>
    );
};

export default UpdateCountry;
