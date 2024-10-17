"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";

const DesignProjects = ({ designs }: { designs: any }) => {
  const designBlog = designs?.blogs;
  const sortedDesigns = designBlog?.sort((a:any, b:any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return (
    <div>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Product Design:With a unique eye for style, design and trending
          techniques;{" "}
          <Highlight className="text-black dark:text-white">
            tech, beauty, design.
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <div className="container mx-auto">
        <div className="py-8 text-center space-y-2">
          <p className="font-bold md:text-4xl">Product Design Projects</p>
          <p className="text-sm">
            Find all my projects here. As I transform ideas, techniques to
            beautiful sites to look at.
          </p>
          <p className="text-sm italic font-semibold">
            It's not perfect but its authentic
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 gap-6 p-4">
          {sortedDesigns.map((item: any, i: number) => (
            <BackgroundGradient
              className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900"
              key={i}
            >
              <Image
                src={item.headerimage || `/landscape.jpg`}
                alt={item.title}
                height={600}
                width={600}
                className="object-cover rounded-md"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {item.name}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
              <Link href={`/Riishi/Blogs/${item.id}`}>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    Read Case Study
                  </span>
                </button>
              </Link>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProjects;
