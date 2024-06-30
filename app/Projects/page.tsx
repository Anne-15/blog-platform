"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/projects/HeroSection";
import ProjectContent from "../components/projects/ProjectContent";
import { allsoftwarePJS } from "./Requests";

const page = async () => {
  const softwaredata = await allsoftwarePJS();

  return (
    <>
      <HeroSection />
      <ProjectContent projects={softwaredata} />
    </>
  );
};

export default page;
