"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface Project {
  id: number;
  title: string;
  description: React.JSX.Element;
  header: React.JSX.Element;
  className: string;
  icon: React.JSX.Element;
  link: string;
  image: string;
  data: React.JSX.Element;
}

const ProjectPage = ({ project }: { project: Project }) => {
  return (
    <>
      <Navbar />
      <div className="flex-1 min-h-screen overflow-y-auto">
        <main className="max-w-4xl w-full mx-auto pb-10 pt-20 px-4 md:px-10">
          <article>
            <header className="flex flex-col">
              <Link href="/Projects">
                <div className="rounded-full hover:shadow-md w-10 h-10 flex items-center justify-center border cursor-pointer">
                  <FaArrowLeft />
                </div>
              </Link>
              <h1 className="text-base md:text-xl lg:text-4xl font-semibold bg-clip-text py-4">
                {project.title}
              </h1>
              <div className="w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src={project.image || "/default-image.jpg"}
                  alt="project image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
                  className="rounded-lg"
                />
              </div>
            </header>
            <div className="mt-8 space-y-3">
              {project.data}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
