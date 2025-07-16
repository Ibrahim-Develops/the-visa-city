import Assistance from "@/components/Assistance";
import Carousel from "@/components/Carousel";
import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import VisaService from "@/components/VisaService";

export default function Home() {
  return (
    <div className="px-6 md:px-20 lg:px-[180px] w-full flex flex-col justify-center items-center">
      <Hero/>
      <Countries/>
      <Carousel/>
      <Assistance/>
      <VisaService/>
      <Reviews/>
      <Questions/>
    </div>
  );
}
