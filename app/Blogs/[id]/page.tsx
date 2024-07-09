"use client";
import Footer from "@/app/components/Footer";
import MagicButton from "@/app/components/MagicButton";
import Navbar from "@/app/components/Navbar";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";
import { LinkPreview } from "@/app/components/ui/link-preview";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const page = () => {
  const words = [
    {
      text: "Going",
    },
    {
      text: "back",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "teaching routes",
      className: "text-purple-800 dark:text-purple-200",
    },
  ];

  return (
    <div>
      {/* header image */}
      <div className="mt-20 flex items-center justify-center">
        <div className="md:grid md:grid-cols-2 gap-2 items-center justify-items-center">
          <div className="text-sm  prose prose-sm dark:prose-invert">
            <Image
              src="/655shots_so.png"
              alt="blog thumbnail"
              height="400"
              width="600"
              className="rounded-lg mb-10 object-cover"
            />
          </div>
          <div className="space-y-3">
            <div className="font-bold text-3xl text-slate-800 dark:text-white">
              Piggy Bank App
            </div>
            {/* description */}
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Improving user activation rate by integrating the fitness app with
              older adults existing exercise routines.
            </div>
            {/* details */}
            <div className="text-sm leading-loose tracking-widest text-slate-800 dark:text-slate-300">
              <h1>Project Type: end-to-end app</h1>
              <h1>Role: UI/UX Designer</h1>
              <h1>Industry: Finance, Banking</h1>
            </div>

            <div>
              <Link href="/" className="gap-2">
                <MagicButton title={"View hi-fi Prototype"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* table of contents */}
      <div className="bg-purple-800 dark:bg-purple-200 w-full h-[200px] text-slate-50 dark:text-slate-900 py-6">
        <div className="md:grid md:grid-cols-1 gap-6 container justify-items-center content-center mx-auto">
          <div>
            <div className="font-bold text-center">DISCOVER</div>
            <div className="text-sm tracking-wider space-y-5 pt-3 leading-relaxed text-center">
              <div>Going Back to my teaching routes</div>
              <div>How is the problem currently being addressed?</div>
              <div>The End?</div>
              
            </div>
          </div>
          {/* <div>
            <div className="">DEFINE</div>
            <div className="text-sm tracking-wider space-y-2 pt-3 leading-relaxed">
              <div>What do teachers want and why?</div>
              <div>Align the solution to the research</div>
            </div>
          </div> */}
          {/* <div>
            <div className="">DEVELOP</div>
            <div className="text-sm tracking-wider space-y-2 pt-3 leading-relaxed">
              <div>Uncovering user's mental models</div>
              <div>Getting to the goal with fewer clicks</div>
              <div>How would the product work?</div>
              <div>Iterating based on usability testing</div>
            </div>
          </div> */}
          {/* <div>
            <div className="">USEFUL LINKS</div>
            <div className="text-sm tracking-wider space-y-2 pt-3 leading-relaxed">
              <div>Prototypes: </div>
              <div>Where do we go from here?</div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container mx-auto flex justify-center my-8">
        <div className="flex flex-col items-center w-full">
          <TypewriterEffectSmooth words={words} />
          <div className="w-1/2 flex flex-col ">
            <div className="text-center py-12">DISCOVER</div>
            <div className="text-center py-6 font-bold text-3xl">
              The Problem
            </div>
            <div className="leading-loose">
              High school math teachers have up to 175 students to support on a
              daily basis. Supporting each student individually is very
              challenging.
              <p>
                Despite the increase in online resource use due to distance
                learning during the pandemic, high school math teachers struggle
                to find online resources that help students rather than hinder
                students from understanding and applying math skills.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div
        className={cn(
          `w-full h-[200px] relative pb-1 dark:text-white font-bold px-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 flex justify-center items-center`
        )}
      >
        <div className="text-3xl">
          How is the problem currently being addressed?
        </div>
      </div>

      <div className="container mx-auto flex justify-center my-20">
        <div className="w-1/2 flex flex-col items-center leading-loose">
          <div>
            <div className="font-bold py-6">
              How are our competitors supporting or hindering students learning?
            </div>
            I compared the features, strengths, and weaknesses of 4 online math
            resources: Khan Academy, Desmos, IXL, and i-Ready. This helped
            prepare me for the user interviews by giving me a better frame of
            reference for the types of resources our users currently had
            available. Also, identifying competitors' common strengths and
            weaknesses helped me identify elements to mimic or avoid in
            developing our product.
          </div>
          {/* competitive analysis diagram */}
          <div className="mt-10">
            <Image
              src={"/analysis.PNG"}
              alt={"analysis"}
              width={600}
              height={600}
            />
          </div>
          <div className="text-sm">
            Competitive analysis showing common strengths and weaknesses.
            <LinkPreview url="https://tailwindcss.com" className="font-bold text-purple-800 dark:text-purple-200">
              view full analysis
            </LinkPreview>{" "}
          </div>
          <div className="py-8">
            <div className="font-bold py-6">
              Conclusion
            </div>
            I compared the features, strengths, and weaknesses of 4 online math
            resources: Khan Academy, Desmos, IXL, and i-Ready. This helped
            prepare me for the user interviews by giving me a better frame of
            reference for the types of resources our users currently had
            available. Also, identifying competitors' common strengths and
            weaknesses helped me identify elements to mimic or avoid in
            developing our product.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
