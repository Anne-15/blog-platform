import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { items } from "@/app/components/projects/ProjectContent";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";
import ProjectPage from "@/app/components/projects/ProjectPage";
import ProjectsPage from "@/app/components/projects/ProjectPage";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const projectIndex = parseInt(id) - 1;
  const project:any = items[projectIndex];

  if (!project) {
    notFound();
    return null;
  }
  return <ProjectPage project={project}/> ;
};

export default page;
