"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

// Images
import B1 from "../public/B1.jpg";
import B2 from "../public/B2.jpg";
import B3 from "../public/B3.jpg";
import B4 from "../public/B4.jpg";
import B5 from "../public/B5.jpg";
import B6 from "../public/B6.jpg";

// Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Top Visa‑Free Countries for UAE Residents in 2025",
    category: "TRAVEL TIPS",
    image: B1,
    description:
      "Discover visa-free destinations UAE residents can explore without paperwork.",
    content: `As visa waivers expand globally, explore destinations across Asia, the Americas, and Europe offering spontaneous travel opportunities for UAE citizens.

These destinations allow easy entry, minimal documentation, and are ideal for quick getaways. Popular visa-free countries for UAE residents include Maldives, Georgia, Seychelles, and Serbia.

Make sure your passport is valid for at least 6 months and carry necessary return/onward tickets. Some countries also offer eVisa or visa-on-arrival for UAE nationals.`,
  },
  {
    id: 2,
    title: "How to Get a Business Visa for Europe: Step‑by‑Step Guide",
    category: "CORPORATE VISAS",
    image: B2,
    description:
      "Expert advice on applying for business visas to Europe this year.",
    content: "component",
  },
  {
    id: 3,
    title: "Visa Application Mistakes You Should Avoid in 2025",
    category: "VISA GUIDANCE",
    image: B3,
    description:
      "Common errors in visa applications that lead to rejection or delays.",
    content: "component",
  },
  {
    id: 4,
    title: "Top Student Visa Destinations and How to Apply",
    category: "STUDY ABROAD",
    image: B4,
    description:
      "Countries offering easier student visa routes in 2025: Canada, UK, Germany, Australia.",
    content: "component",
  },
  {
    id: 5,
    title: "Family Visas: Bringing Loved Ones Closer, Legally",
    category: "FAMILY VISAS",
    image: B5,
    description:
      "How to sponsor parents, spouse or children with ease and legal compliance.",
    content: "component",
  },
  {
    id: 6,
    title: "Fast‑Track Visa Services You Should Know About",
    category: "EXPRESS SERVICES",
    image: B6,
    description:
      "Need urgent travel? Learn about embassies offering express visa processing.",
    content: "component",
  },
];

// Steps Section
const VisaStepsComponent = ({ blogId }: any) => {
  let steps: string[] = [];
  let intro = "";
  let note = "";
  let title = "";

  switch (blogId) {
    case 2:
      title = "How to Get a Business Visa for Europe";
      intro = "Planning to expand your business or attend a conference in Europe? Start by identifying the right Schengen state where your primary business meeting will take place.";
      steps = [
        "Collect invitation letter from the host company.",
        "Fill out the Schengen visa application form.",
        "Book your appointment online through the embassy portal.",
        "Gather supporting documents like company registration, 3-month bank statement, and NOC letter.",
        "Submit at the visa center (like VFS Global).",
      ];
      note = "Processing usually takes 10–15 days. Apply early.";
      break;
    case 3:
      title = "Common Visa Application Mistakes to Avoid";
      intro = "Avoid these common mistakes that often lead to visa rejections or unnecessary delays.";
      steps = [
        "Incomplete or incorrectly filled application forms.",
        "Inconsistent or unrealistic travel dates.",
        "Insufficient financial documents or proof of funds.",
        "Poorly written or unclear travel purpose (cover letter).",
        "Missing supporting documents or inaccurate info during interview.",
      ];
      note = "Review everything twice. A small error can cause big delays.";
      break;
    case 4:
      title = "Top Student Visa Destinations & Application Steps";
      intro = "Ready to begin your academic journey abroad? Here's how to get started with your student visa.";
      steps = [
        "Choose your destination and university (e.g., UK, Canada, Australia, Germany).",
        "Receive Letter of Acceptance or Confirmation of Enrollment (CoE).",
        "Prepare documents: academic transcripts, SOP, IELTS/PTE, bank statements.",
        "Apply online or via embassy portal depending on destination.",
        "Attend biometric appointment and await your visa result.",
      ];
      note = "Each country has its own timeline. Apply at least 2–3 months in advance.";
      break;
    case 5:
      title = "Steps to Apply for a Family Visa";
      intro = "Want to bring your loved ones with you legally? Here are the common steps to sponsor family.";
      steps = [
        "Ensure your residence status allows sponsorship.",
        "Prepare documents: proof of relationship, income, and accommodation.",
        "Complete the online visa application form for family reunion.",
        "Schedule a biometric appointment for the applicant.",
        "Submit all documents at the embassy or visa center.",
      ];
      note = "Family visa approval timelines differ by country. Start early.";
      break;
    case 6:
      title = "Express Visa Options You Should Know About";
      intro = "Need a visa urgently? Some countries offer priority or fast-track options. Here's how to apply.";
      steps = [
        "Check if your destination offers priority or super-priority services.",
        "Ensure all documents are 100% complete and valid.",
        "Book the earliest available VIP slot online (limited).",
        "Prepare extra fee for expedited processing.",
        "Track your application frequently and respond promptly to queries.",
      ];
      note = "Fast-track slots fill quickly. Have all your paperwork ready.";
      break;
    default:
      return null;
  }

  return (
    <div className="bg-black border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-yellow-400">{title}</h2>
      <p className="text-gray-300 text-sm sm:text-base">{intro}</p>
      <ul className="space-y-3">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
            <span className="text-sm sm:text-base">{step}</span>
          </li>
        ))}
      </ul>
      <p className="italic text-sm text-gray-400">
        <span className="text-yellow-400">{note}</span>
      </p>
    </div>
  );
};

// Main Blog Display
const DisplayBlog = () => {
  const params = useParams();
  const blogId = params?.id ? parseInt(params.id as string) : NaN;
  const blog = blogPosts.find((post) => post.id === blogId);

  if (!blog) {
    return (
      <div className="text-center py-32 text-gray-300 text-xl">
        Blog post not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 text-white">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs sm:text-sm tracking-widest text-[#FFD700] uppercase">
          {blog.category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 leading-snug">
          {blog.title}
        </h1>
        <div className="h-1 w-20 bg-[#FFD700] mt-4 rounded-full" />
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4">
          {blog.description}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-64 sm:h-80 md:h-[450px] mb-12 shadow-lg rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
      </div>

      {/* Article */}
      <article className="prose prose-invert max-w-none text-gray-200 prose-p:mb-4 prose-ul:pl-6 prose-li:marker:text-[#FFD700] prose-strong:text-white">
        {blog.content === "component" ? (
          <VisaStepsComponent blogId={blogId} />
        ) : (
          blog.content.split("\n").map((para, idx) => <p key={idx}>{para}</p>)
        )}
      </article>
    </section>
  );
};

export default DisplayBlog;
