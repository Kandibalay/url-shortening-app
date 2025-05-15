import Boost from "@/components/boost";
import Hero from "@/components/hero";
import Shorten from "@/components/shorten";
import Stat from "@/components/stat";
import Footer from "@/layout/footer";
import Nav from "@/layout/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <div className="bg-[#f0f1f6] w-full">
        <Shorten />
      </div>
      <Stat />
      <Boost />
      <Footer />
    </div>
  );
}

{
  /* <div className="relative">
        <div className="w-full absolute -top-15">
          <Shorten />
        </div>
        <Stat />
      </div> */
}
