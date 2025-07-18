"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCashOutline } from "react-icons/io5";
import { GrGlobe } from "react-icons/gr";
import { CiFlag1 } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";

interface FormValues {
    countryName: string;
    visaAmount: string;
    countryflag: string;
    countrydisplayimage: string;
    countryextraimage1: string;
    countryextraimage2: string;
}

const fields: {
    label: string;
    name: keyof FormValues;
    placeholder: string;
    requiredMessage: string;
    icon: JSX.Element;
}[] = [
        {
            label: "Country Name",
            name: "countryName",
            placeholder: "Enter country name",
            requiredMessage: "Country Name Is Required",
            icon: <GrGlobe className="text-2xl" />,
        },
        {
            label: "Visa Amount",
            name: "visaAmount",
            placeholder: "Enter visa amount",
            requiredMessage: "Visa Amount is required",
            icon: <IoCashOutline className="text-2xl" />,
        },
        {
            label: "Country Flag",
            name: "countryflag",
            placeholder: "Select Country Flag",
            requiredMessage: "Country Flag Is Required",
            icon: <CiFlag1 className="text-2xl" />,
        },
        {
            label: "Country Display Image",
            name: "countrydisplayimage",
            placeholder: "Select Display Country Image",
            requiredMessage: "Country Display Image Is Required",
            icon: <CiImageOn className="text-2xl" />,
        },
        {
            label: "Country Extra Image1",
            name: "countryextraimage1",
            placeholder: "Select Extra Country Image1",
            requiredMessage: "Country Extra Image1 Is Required",
            icon: <CiImageOn className="text-2xl" />,
        },
        {
            label: "Country Extra Image2",
            name: "countryextraimage2",
            placeholder: "Select Extra Country Image2",
            requiredMessage: "Country Extra Image2 Is Required",
            icon: <CiImageOn className="text-2xl" />,
        },
    ];

const AddCountry = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Submitted:", data);
        toast.success("Country added successfully!");
    };

    return (
        <div className="px-10 py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/dashboard"
                            className="bg-[#072343] w-fit p-2 rounded-full shadow-2xl cursor-pointer"
                        >
                            <FaArrowLeftLong className="text-white text-2xl" />
                        </Link>
                        <h1 className="text-5xl font-bold">Country</h1>
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold text-2xl">Welcome To The Country Page</h2>
                            <p className="text-gray-600 text-[15px]">
                                All Fields Are Compulsory To Add a Country{" "}
                                <span className="text-red-600">*</span>
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#072343] px-16 py-4 text-white rounded-xl font-bold cursor-pointer"
                        >
                            Add Country
                        </button>
                    </div>

                    <div className="grid grid-cols-3 w-full gap-10">
                        {fields.map((field, i) => (
                            <div key={i} className="flex flex-col gap-2 w-full">
                                <label className="font-semibold text-lg">{field.label}</label>
                                <div className="border-[1px] border-gray-300 flex items-center gap-3 p-4 rounded-lg">
                                    {field.icon}
                                    <input
                                        type="text"
                                        placeholder={field.placeholder}
                                        className="outline-none w-full"
                                        {...register(field.name, {
                                            required: field.requiredMessage,
                                        })}
                                    />
                                </div>
                                {errors[field.name] && (
                                    <p className="text-red-500 text-sm">
                                        {errors[field.name]?.message}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </form>
            <ToastContainer position="top-center" autoClose={1500} />
        </div>
    );
};

export default AddCountry;
