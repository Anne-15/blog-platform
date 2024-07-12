import MagicButton from "@/app/components/MagicButton";
import { LinkPreview } from "@/app/components/ui/link-preview";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getoneDesign } from "../Requests";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const designs = await getoneDesign(id);
  const design = designs.blog;

  const problemStatement = design.problemStatement;
  const wordsArray = problemStatement.split(" ");
  const words = wordsArray.map((word: string, index: number) => {
    const className = index >= 5 ? "text-purple-800 dark:text-purple-200" : "";
    return {
      text: word,
      className: className,
    };
  });

  return (
    <div>
      {/* Header Image */}
      <div className="mt-20 flex items-center justify-center px-4">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-items-center">
          <div className="w-full text-sm  prose prose-sm dark:prose-invert">
            <Image
              src={design.headerimage}
              alt="blog thumbnail"
              height={400}
              width={400}
              className="rounded-lg mb-10 object-cover"
            />
          </div>
          <div className="space-y-3 text-center md:text-left">
            <div className="font-bold text-2xl md:text-3xl text-slate-800 dark:text-white">
              {design.name}
            </div>
            {/* Details */}
            <div className="text-sm leading-loose tracking-widest text-slate-800 dark:text-slate-300">
              <h1>Project Type: {design.projectType}</h1>
              <h1>Role: {design.role}</h1>
              <h1>Industry: {design.industry}</h1>
            </div>
            <div>
              <Link href={design.designLink}>
                <MagicButton title={"View hi-fi Prototype"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-purple-800 dark:bg-purple-200 w-full text-slate-50 dark:text-slate-900 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-3">
            <div className="font-bold">DISCOVER</div>
            <div className="text-sm tracking-wider space-y-5 pt-3 leading-relaxed text-center">
              <div>{design.problemStatement}</div>
              <div>{design.contentHeader}</div>
              <div>The End?</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center my-8 px-4">
        <TypewriterEffectSmooth words={words}/>
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col">
          <div className="py-12 text-center">DISCOVER</div>
          <div className="py-6 font-bold text-2xl md:text-3xl text-center">The Problem</div>
          <div className="leading-loose">{design.description}</div>
        </div>
      </div>

      {/* Content Header */}
      <div className={cn(
          `w-full h-[200px] relative pb-1 dark:text-white font-bold px-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 flex justify-center items-center`
        )}
      >
        <div className="text-2xl md:text-3xl">{design.contentHeader}</div>
      </div>

      {/* Additional Content */}
      <div className="container mx-auto flex justify-center my-20 px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center leading-loose">
          <div>
            <div className="font-bold py-6">{design.contentHeader2}</div>
            {design.content}
          </div>
          {/* Competitive Analysis Diagram */}
          {design.images && (
            <div className="mt-10">
              <Image
                src={design.images}
                alt={"analysis"}
                width={600}
                height={600}
                className="w-full object-contain"
              />
            </div>
          )}

          {design.presentationLink && (
            <div className="text-sm mt-6">
              Full analysis, research, models, wireframes, and mockups in the
              presentation link provided. Let's meet there....
              <LinkPreview
                url={design.presentationLink}
                className="font-bold text-purple-800 dark:text-purple-200"
              >
                view full design research and analysis
              </LinkPreview>
            </div>
          )}

          <div className="py-8">
            <div className="font-bold py-6">Conclusion</div>
            {design.conclusion}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
