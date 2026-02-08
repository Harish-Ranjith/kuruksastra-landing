import About from "@/pages/About";
import Artists from "@/pages/Artists";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Sponsors from "@/pages/Sponsors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Artists />
      <About />
      <Sponsors />
      <Footer />
    </div>
  );
}
