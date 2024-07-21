"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Meteors } from "./ui/meteors";
import Link from "next/link";
import IconDock from "./IconDock";
import ExperienceCard from "./ExperienceCard";

const Tag = ({ tag }: { tag: string }) => {
  return (
    <h2 className="bg-black text-white rounded-md text-sm w-fit px-4 py-1 dark:bg-white dark:text-black">
      {tag}
    </h2>
  );
};

const AboutPage = () => {
  return (
    <div>
      <div className="h-[35rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex justify-center items-start h-[40rem] flex-col px-4">
          <h1 className="text-neutral-900 dark:text-neutral-300 text-xl md:text-3xl max-w-3xl mx-auto mb-4">
            Hi, I'm
            <span className="font-bold dark:text-white ">
              {" "}
              Anne Wariiyu Nduati{" "}
            </span>
            and I'm a
            <span
              className={cn(
                `relative inline-block pb-1 dark:text-white font-bold  px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`
              )}
            >
              Frontend Software Engineer and Product Designer
            </span>
          </h1>
        </div>
      </div>

      <div className="">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-xl md:text-3xl">Personal Bio</h1>
          <p className="py-4 text-small leading-relaxed">
            I bring the fun and the function! I'm a strategi'c (love that typo!)
            Software Engineer and UI/UX Product Designer. While I code with a
            keen eye for detail and industry standards, my true passion lies in
            transforming novel ideas into beautiful, user-friendly products.
            Beyond the technical, I'm a highly innovative thinker who thrives on
            creative problem-solving. <br /> <br />
            When I'm not coding, you might find me lost in a world of art,
            crafts, or tinkering with some new hardware or software project. My
            love for music (especially house-music!) fuels my creativity, and I
            find inspiration in both classic self-help books and the latest pop
            hits. <br /> <br /> This unique blend of technical skills, creative
            spark, and playful spirit allows me to approach every project with
            fresh eyes and an unwavering commitment to crafting exceptional
            experiences.
          </p>
          <p>Here's a timeline of what I've been up to:</p>
          <div className="my-10">
            <h1 className="font-bold text-xl md:text-3xl mb-4">Experience</h1>
            {/* experience card */}
            <div className="space-y-4">
            <ExperienceCard
                companyName="Freelance Software Engineer"
                jobTitle="Software Engineer"
                dates="January 2024 - Present"
                description={[
                  "Building frontend software applications based on predefined and approved designs.",
                  "User Interface and User Experience Designs",
                  "Building web and mobile applications",
                ]}
                skills={[
                  "NextJS",
                  "TypeScript",
                  "Flutter",
                  "Dart",
                  "Figma",
                  "UI/UX Design",
                ]}
              />

              <ExperienceCard
                companyName="Fintech-Group"
                jobTitle="Implementation and Support Engineer, Internship"
                dates="October 2023 - Present"
                description={[
                  "Building frontend software applications based on predefined and approved designs.",
                  "Creation of a design system and designing of user interface for the companies new iteration of their products.",
                  "Offering Technical support on company products.",
                ]}
                skills={[
                  "NextJS",
                  "TypeScript",
                  "Azure DevOps",
                  "Technical Support",
                  "Figma",
                  "UI/UX Design",
                ]}
              />

              <ExperienceCard
                companyName="Techno Brain Group"
                jobTitle="Software Test Engineer I"
                dates="July 2022 - April 2023"
                description={[
                  "Triaged daily customer feedback and collaborated with Microsoft to understand customer needs.",
                  "Generated comprehensive daily, monthly, and quarterly review reports.",
                  "Created visually appealing Power BI dashboard reports for data presentation and reports automation.",
                  "Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for the process improvement.",
                  "Leveraged machine learning models and tools for identification and categorization of similar customer feedback",
                  "Querying, manipulating, and reporting on data using Kusto and Kusto Queries"
                ]}
                skills={[
                  "PowerBI",
                  "Data Analysis",
                  "Critical Thinking",
                  "Kusto Queries",
                  "Powerpoint Presentations",
                  "Automation Testing",
                ]}
              />
            </div>
          </div>
          {/* <div className="relative">
            <h1 className="font-bold text-xl md:text-3xl mb-4">Tech Stack</h1>
            <p>Overal Teck Stack Knowledge</p>
            <IconDock/>
          </div> */}
        </div>
      </div>
      <Meteors number={3} />
    </div>
  );
};

export default AboutPage;
