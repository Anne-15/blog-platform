import React from "react";
import Navbar from "../components/Navbar";
import CardBlogs from "../components/CardBlogs";
import Image from "next/image";
import Footer from "../components/Footer";
import CardProjects from "../components/CardProjects";
import HeroSection from "../components/projects/HeroSection";
import { DirectionAwareHover } from "../components/ui/layout-grid";

const page = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <HeroSection />

      <div className="md:flex md:flex-row flex-col justify-center gap-6 mx-4 md:m-10">
        
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-0">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-0">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-0">
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
      </div>
    </>
  );
};

export default page;
