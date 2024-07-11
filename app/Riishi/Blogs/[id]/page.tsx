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
    // You can add custom logic here to assign classes to specific words if needed
    const className = index >= 5 ? "text-purple-800 dark:text-purple-200" : "";
    return {
      text: word,
      className: className,
    };
  });

  return (
    <div>
      {/* header image */}
      <div className="mt-20 flex items-center justify-center">
        <div className="md:grid md:grid-cols-2 gap-2 items-center justify-items-center">
          <div className="text-sm  prose prose-sm dark:prose-invert">
            <Image
              src={design.headerimage}
              alt="blog thumbnail"
              height="400"
              width="400"
              className="rounded-lg mb-10 object-cover"
            />
          </div>
          <div className="space-y-3">
            <div className="font-bold text-3xl text-slate-800 dark:text-white">
              {design.name}
            </div>
            {/* details */}
            <div className="text-sm leading-loose tracking-widest text-slate-800 dark:text-slate-300">
              <h1>Project Type: {design.projectType}</h1>
              <h1>Role: {design.role}</h1>
              <h1>Industry: {design.industry}</h1>
            </div>

            <div>
              <Link href={design.designLink} className="gap-2">
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
              <div>{design.problemStatement}</div>
              <div>{design.contentHeader}</div>
              <div>The End?</div>
            </div>
          </div>
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
            <div className="leading-loose">{design.description}</div>
          </div>
          <div></div>
        </div>
      </div>

      <div
        className={cn(
          `w-full h-[200px] relative pb-1 dark:text-white font-bold px-1 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 flex justify-center items-center`
        )}
      >
        <div className="text-3xl">{design.contentHeader}</div>
      </div>

      <div className="container mx-auto flex justify-center my-20">
        <div className="w-1/2 flex flex-col items-center leading-loose">
          <div>
            <div className="font-bold py-6">{design.contentHeader2}</div>
            {design.content}
          </div>
          {/* competitive analysis diagram */}
          {design.images && (
            <div className="mt-10">
              <Image
                src={design.images}
                alt={"analysis"}
                width={600}
                height={600}
              />
            </div>
          )}

          {design.presentationLink && (
            <div className="text-sm">
              Full analysis, research, models, wireframes and mockups in the
              presentation link provided. Let's meet there....
              <LinkPreview
                url={design.presentationLink}
                className="font-bold text-purple-800 dark:text-purple-200"
              >
                view full design research and analysis
              </LinkPreview>{" "}
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
