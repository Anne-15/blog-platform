import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const page = ({ params }: { params: number }) => {
  return (
    <>
      <div className="flex-1 min-h-screen overflow-y-auto">
        <main className="max-w-4xl w-full mx-auto pb-10 pt-20 px-4 md:px-10">
          <article>
            <header className="flex flex-col">
              <Link href={"/Projects"}>
                <div className="rounded-full hover:shadow-md w-10 h-10 flex items-center justify-center border cursor-pointer">
                  <FaArrowLeft />
                </div>
              </Link>
              <h1 className="text-base md:text-xl lg:text-4xl font-semibold bg-clip-text py-4">
                Welcome to my Platform.
              </h1>
              <div className="w-full mt-4 apsect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                  src={"/landscape.jpg"}
                  alt="image header"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left top"
                  className="rounded-lg"
                />
              </div>
            </header>
            {/* body */}
            <div className="mt-8 space-y-3 ">
              <p>
                Hey there, and welcome to my portfolio blog! This space is more
                than just a collection of projects - it's an invitation to peek
                behind the curtain and see how my creative process unfolds.
                Here, you'll find not only the polished end products, but also
                the exciting (and sometimes messy) journey of how I get there,
                from the initial spark of an idea to the final result.
              </p>
              <p>
                But before we delve into the projects, let me tell you a bit
                about myself. I'm Anne, a software engineer, product designer
                and upcoming product manager. My passion for computers and
                technology has been with me since early childhood where my
                curiosity about computers took over. Whether it's design,
                development, leadership, I'm always eager to learn, experiment,
                and push the boundaries of what's possible.
              </p>
              <p>So take your time here and learn about my projects.</p>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default page;
