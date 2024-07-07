import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";

const ProjectPage = ({ project }: { project: any }) => {
  const item = project.project;
  
  return (
    <>
      <Navbar />
      <div className="flex-1 min-h-screen overflow-y-auto">
        <main className="max-w-4xl w-full mx-auto pb-10 pt-20 px-4 md:px-10">
          <article>
            <header className="flex flex-col">
              <div className="flex justify-between items-center">
                <Link href="/Projects">
                  <div className="rounded-full hover:shadow-md w-10 h-10 flex items-center justify-center border cursor-pointer">
                    <FaArrowLeft />
                  </div>
                </Link>
                {/* <button className="font-bold text-purple-800 dark:hover:text-purple-400 dark:text-purple-200">
                  update project
                </button> */}
              </div>
              <h1 className="text-base md:text-xl lg:text-4xl font-semibold bg-clip-text py-4">
                {item.name}
              </h1>
              <div className="w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src={item.image || "/landscape.jpg"}
                  alt="project image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
                  className="rounded-lg"
                />
              </div>
            </header>
            <div className="mt-8 space-y-3">
              <p>{item.desc}</p>
              <p>{item.backgroundInfo}</p>
              <p>{item.objectives}</p>
              <div className="flex items-center justify-center">
                <Image
                  src={item.designs || "/landscape.jpg"}
                  alt="project image"
                  layout=""
                  width={650}
                  height={500}
                  objectFit=""
                  objectPosition=""
                  className="rounded-lg"
                />
              </div>
              <p>{item.functionaliy}</p>
              <p>{item.conclusion}</p>
            </div>
            <div className="flex justify-end"></div>
          </article>
        </main>
      </div>
    </>
  );
};

export default ProjectPage;
