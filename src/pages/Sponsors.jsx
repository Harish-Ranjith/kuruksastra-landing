import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { alfa } from "@/app/layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SponsorItem = ({ src, className = "" }) => (
  <div className={`bg-[#c9a43a]/20 border border-[#b8941f]/30 rounded-xl flex items-center justify-center p-4 aspect-[3/2] transition-transform duration-200 hover:scale-105 ${className}`}>
    <Image
      src={src}
      alt="sponsor"
      width={160}
      height={100}
      className="object-contain w-full h-full"
    />
  </div>
);

const Sponsors = () => {
  const containerRef = useRef(null);
  const sponsList = [
    "/sponsors/2IIM.png",
    "/sponsors/AIRTEL.png",
    "/sponsors/Bharath snacks.png",
    "/sponsors/CUB.png",
    "/sponsors/Dark Town Gamerz.png",
    "/sponsors/Falooda Shop.png",
    "/sponsors/Finlatics.png",
    "/sponsors/Hazelvous Naturals.png",
    "/sponsors/idp.png",
    "/sponsors/Koblerr.png",
    "/sponsors/Mask group.png",
    "/sponsors/LA Sizzlers.png",
    "/sponsors/Magoosh.png",
    "/sponsors/MRP Vapo Cure Paints.png",
    "/sponsors/pepsi.png",
    "/sponsors/Roshan Bag.png",
    "/sponsors/TVS Motor Company.png",
    "/sponsors/Urban Pots.png",
    "/sponsors/Veranda.png",
  ];

  return (
    <div id="sponsorship" ref={containerRef} className="Sponsor flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-20 md:py-32 gap-12 md:gap-20 overflow-hidden">

      {/* Title */}
      <p
        className={`${alfa.className} text-center text-[28px] sm:text-[40px] md:text-[56px] lg:text-[78px] leading-none text-[#3A260D]`}
      >
        PREVIOUS SPONSORS
      </p>

      {/* Sponsor Cards - modern look, last row centered */}
      <div className="w-full max-w-[1200px] flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
        {sponsList.map((src, i) => (
          <div key={i} className="w-[28%] sm:w-[22%] md:w-[17%] sponsor-card">
            <SponsorItem src={src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
