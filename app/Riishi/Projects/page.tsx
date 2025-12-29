import React from "react";
import { allsoftwarePJS } from "./Requests";
import HeroSection from "@/app/components/projects/HeroSection";
import ProjectContent from "@/app/components/projects/ProjectContent";

const page = async () => {
  const softwaredata = await allsoftwarePJS();
  return (
    <>
      <HeroSection />
      <ProjectContent softwaredata={softwaredata} />
    </>
  );
};

export default page;
