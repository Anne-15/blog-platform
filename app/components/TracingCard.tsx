"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "./MagicButton";

const TracingCard = ({content}:{content:any}) => {
  const dummyContent:any = content?.projects;
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent?.map((item: {id:number; title: string; image: string; desc: string; }, index:number) => (
          <div key={`content-${index}`} className="mb-6">
            <p className="text-lg pb-1 font-bold">{item.title}</p>
            <div className="my-2 pb-2 flex flex-wrap gap-2">
              {/* {Array.isArray(item.badge) ? (
                item.badge.map((badge, badgeIndex) => (
                  <h2
                    key={`badge-${badgeIndex}`}
                    className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-black"
                  >
                    {badge}
                  </h2>
                ))
              ) : (
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 dark:bg-white dark:text-black">
                  {item.badge}
                </h2>
              )} */}
            </div>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <div className="tracking-wider pb-3">
              {item.desc}
              </div>
              
              <div className="flex justify-end">
                <Link href={`/Riishi/Projects/${item.id}`}  className="gap-2">
                  <MagicButton title={"Learn More"} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
};

export default TracingCard;
