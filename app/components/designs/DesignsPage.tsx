import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "../MagicButton";

const DesignsPage = () => {
  return (
    <div className="mx-auto">
      {/* design card */}
      <div className="md:grid md:grid-cols-2 gap-2 items-center justify-items-center">
        {/* image */}
        <div className="text-sm  prose prose-sm dark:prose-invert">
          <Image
            src="/piggy-bank.png"
            alt="blog thumbnail"
            height="400"
            width="600"
            className="rounded-lg mb-10 object-cover"
          />
        </div>

        <div className="space-y-3">
          {/* project name */}
          <div className="my-2 pb-2 flex flex-wrap gap-2">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-black">Original</h2>
          </div>
          <div className="font-bold text-3xl text-slate-800 dark:text-white">Piggy Bank App</div>
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
            <Link href="/Riishi/" className="gap-2">
              <MagicButton title={"View Case Study"} />
            </Link>
          </div>
        </div>
      </div>

      {/* design card */}
      <div className="md:grid md:grid-cols-2 gap-2 items-center justify-items-center">
        {/* image */}
        <div className="text-sm  prose prose-sm dark:prose-invert">
          <Image
            src="/751_1x_shots_so.png"
            alt="blog thumbnail"
            height="400"
            width="600"
            className="rounded-lg mb-10 object-cover"
          />
        </div>

        <div className="space-y-3">
          {/* project name */}
          <div className="my-2 pb-2 flex flex-wrap gap-2">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-black">Re-design</h2>
          </div>
          <div className="font-bold text-3xl text-slate-800 dark:text-white">Fintech Website</div>
          {/* description */}
          <div className="text-sm text-slate-600 dark:text-slate-300">
            Improving user activation rate by integrating the fitness app with
            older adults existing exercise routines.
          </div>
          {/* details */}
          <div className="text-sm leading-loose tracking-widest text-slate-800 dark:text-slate-300">
            <h1>Project Type: Redesign of company webiste</h1>
            <h1>Role: UI/UX Designer</h1>
            <h1>Industry: Finance, Banking, Technology</h1>
          </div>

          <div>
            <Link href="/Riishi/" className="gap-2">
              <MagicButton title={"View Case Study"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignsPage;
