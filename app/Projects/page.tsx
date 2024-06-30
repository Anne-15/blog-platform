"use client"
import React, { useEffect, useState } from "react";
import HeroSection from "../components/projects/HeroSection";
import ProjectContent from "../components/projects/ProjectContent";
import { allsoftwarePJS } from "./Requests";

const page = async () => {
  const [softwaredata, setSoftwareData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await allsoftwarePJS();
        setSoftwareData(data);
      } catch (error) {
        console.error("Error fetching software projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection />
      <ProjectContent projects={softwaredata} />
    </>
  );
};

export default page;
