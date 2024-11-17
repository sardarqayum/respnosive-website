import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProduct from "./components/FeaturedProduct";

export default function Home() {
  return (
    <div>
      <h1>
        <HeroSection />
        <FeaturedProduct />
      </h1>
    </div>
  );
}
