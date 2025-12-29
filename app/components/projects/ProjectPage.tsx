import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import { LinkPreview } from "../ui/link-preview";

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
                <Link href="/Riishi/Projects" aria-label="Navigate back to projects">
                  <div className="rounded-full hover:shadow-md w-10 h-10 flex items-center justify-center border cursor-pointer">
                    <FaArrowLeft aria-hidden="true" />
                  </div>
                </Link>
                {/* <button className="font-bold text-purple-800 dark:hover:text-purple-400 dark:text-purple-200">
                  update project
                </button> */}
              </div>
              <h1 className="text-base md:text-xl lg:text-4xl font-semibold bg-clip-text py-4">
                {item.name}
              </h1>
              <div className="w-full mt-4 aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                <Image
                  src={item.image || "/landscape.jpg"}
                  alt={`${item.name} project header image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                  className="rounded-lg object-cover object-left-top"
                  priority
                />
              </div>
            </header>
            <div className="mt-8 space-y-3">
              <p>{item.desc}</p>
              <p>{item.backgroundInfo}</p>
              <p>{item.objectives}</p>

              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  {item.designs && (
                    <Image
                      src={item.designs || "/landscape.jpg"}
                      alt={`${item.name} design mockup or diagram`}
                      width={650}
                      height={500}
                      className="rounded-lg object-contain"
                      sizes="(max-width: 768px) 100vw, 650px"
                    />
                  )}
                  {item.github && (
                    <div className="text-center py-6">
                      Check the source code of the project on GitHub.{" "}
                      <LinkPreview
                        url={item.github}
                        className="font-bold text-purple-800 dark:text-purple-200"
                      >
                        Github Project Link
                      </LinkPreview>{" "}
                    </div>
                  )}
                </div>
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
