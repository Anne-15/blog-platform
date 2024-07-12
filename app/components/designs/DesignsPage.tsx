import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "../MagicButton";

const DesignsPage = ({ content }: { content: any }) => {
  const designs = content?.blogs;
  return (
    <div className="mx-auto">
      {/* design card */}
      {designs.map((item: any, i: number) => (
        <div className="md:grid md:grid-cols-2 gap-2 items-center justify-items-center" key={i}>
          {/* image */}
          <div className="text-sm  prose prose-sm dark:prose-invert">
            <Image
              src={item.headerimage}
              alt={item.name}
              height="400"
              width="600"
              className="rounded-lg mb-10 object-cover"
            />
          </div>

          <div className="space-y-3">
            {/* project name */}
            <div className="my-2 pb-2 flex flex-wrap gap-2">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-black">
                {item.category}
              </h2>
            </div>
            <div className="font-bold text-3xl text-slate-800 dark:text-white">
              {item.title}
            </div>
            {/* description */}
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Improving user interactions and usability with beautiful and useful designs, use cases and interactions.
            </div>
            {/* details */}
            <div className="text-sm leading-loose tracking-widest text-slate-800 dark:text-slate-300">
              <h1>Project Type: {item.projectType}</h1>
              <h1>Role: {item.role}</h1>
              <h1>Industry: {item.industry}</h1>
            </div>

            <div>
              <Link href={`/Riishi/Blogs/${item.id}`} className="gap-2">
                <MagicButton title={"View Case Study"} />
              </Link>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default DesignsPage;
