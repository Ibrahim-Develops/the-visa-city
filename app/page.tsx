import Assistance from "@/components/Assistance";
import Carousel from "@/components/Carousel";
import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Countries/>
      <Carousel/>
      <Assistance/>
    </div>
  );
}
