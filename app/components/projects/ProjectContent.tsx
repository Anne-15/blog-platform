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
import { getProjects } from "./Requests";

const ProjectContent = () => {
  useEffect(() => {
    getProjects().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error("Error happening...", error);
    })
  },[])
  
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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

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
