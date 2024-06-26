"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ProjectsGrid from "../ui/projects-grid";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SkeletonOne, SkeletonThree, SkeletonTwo } from "./Requests";

const ProjectContent = ({projects}:{projects:any}) => {
  console.log(projects);
  
  return (
    <div className="mx-auto">
      <div className="pt-8 text-center space-y-2">
        <p className="font-bold md:text-4xl">Software Engineering Projects</p>
        <p className="text-sm">
          Find all my projects here. As I take you through my thought process
          and execution.
        </p>
        <p className="text-sm italic font-semibold">
          It's not perfect but its authentic
        </p>
      </div>
      <BentoGrid className="max-w-7xl md:auto-rows-[20rem] my-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ProjectContent;

export const items = [
  {
    id: 1,
    title: "Welcome to my platform",
    description: (
      <p className="text-sm">
          The place where the magic happens. I'm here to unveil the inner
          workings of software engineering, taking you on a journey of code,
          creation, and innovation. Buckle up and get ready to see what the
          future holds! #softwareengineering #codinglife #staytuned
       
      </p>
    ),
    header: (
      <span>
        {" "}
        <SkeletonOne />
      </span>
    ),
    className: "md:col-span-2",
    icon: (
      <span>
        <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
      </span>
    ),
    link: "/Projects/1",
    image: "/landscape.jpg",
    data: (
      <p>
          <p>
            Hey there, and welcome to my portfolio blog! This space is more than
            just a collection of projects - it's an invitation to peek behind
            the curtain and see how my creative process unfolds. Here, you'll
            find not only the polished end products, but also the exciting (and
            sometimes messy) journey of how I get there, from the initial spark
            of an idea to the final result.
          </p>
          <p>
            But before we delve into the projects, let me tell you a bit about
            myself. I'm Anne, a software engineer, product designer and upcoming
            product manager. My passion for computers and technology has been
            with me since early childhood where my curiosity about computers
            took over. Whether it's design, development, leadership, I'm always
            eager to learn, experiment, and push the boundaries of what's
            possible.
          </p>
          <p>So take your time here and learn about my projects.</p>

      </p>
    ),
  },
  {
    id: 2,
    title: "Diabetes Monitoring and Management Platform",
    description: (
      <p className="text-sm">
        The diabetes management and monitoring platform brings forward the
        aspect of having one-on-one conversations between a diabetic patient and
        the specialists, giving new diabetic patients insights and a sense of
        belonging.
      </p>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "/Projects/2",
    image: "/422shots_so.png",
    data: (
      <p>
        <h2 className="font-bold text-xl">Introduction</h2>
        <p>
          The diabetes management and monitoring platform brings forward the
          aspect of having one-on-one conversations between a diabetic patient
          and the specialists, giving new diabetic patients insights and a sense
          of belonging.
        </p>
        <h2 className="font-bold text-xl">About the project</h2>
        <p>
          Diabetes is a chronic disease that has affected thousands of people.
          Some people are born into families who have a history of diabetic
          attack; hence they acquire it eventually, other people get it for the
          first time due to health concerns and gives them a new reality to cope
          with.
        </p>
        <div>
          <Image
            src={"/projectimag2.png"}
            alt={"project image"}
            width={700}
            height={700}
          />
        </div>
        <p>
          I chose this project because I saw a need in the newly diagnosed
          patients and helped me understand the health domain even further.
          You'd think that just because you are healthy every one else is but
          it's quite the contrary out here. We need to cater for everyone in our
          everyday endavours and not forget that there are people who need our
          support every day.
        </p>
      </p>
    ),
  },
  {
    id: 3,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <span>
        <SkeletonTwo />
      </span>
    ),
    className: "md:col-span-1",
    icon: (
      <span>
        <IconSignature className="h-4 w-4 text-neutral-500" />
      </span>
    ),
  },
  {
    id: 4,
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <span>
        <SkeletonOne />
      </span>
    ),
    className: "md:col-span-2",
    icon: (
      <span>
        <IconTableColumn className="h-4 w-4 text-neutral-500" />
      </span>
    ),
  },
];
