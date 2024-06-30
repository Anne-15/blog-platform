"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const TracingCard = ({content}:{content:any}) => {
  const dummyContent:any = content?.projects;
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent?.map((item: { title: string; image: string; desc: string; }, index:number) => (
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
              {item.desc}
              <div className="flex justify-end">
                <Link href="/" className="gap-2">
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

// const dummyContent = [
//   {
//     title: "Welcome to my platform",
//     description: (
//       <>
//         <p>
//           The place where the magic happens. I'm here to unveil the inner
//           workings of software engineering, taking you on a journey of code,
//           creation, and innovation. Buckle up and get ready to see what the
//           future holds! #softwareengineering #codinglife #staytuned.
//         </p>
//       </>
//     ),
//     badge: "Welcome",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Diabetes Monitoring and Management Platform",
//     description: (
//       <>
//         <p>
//           The diabetes management and monitoring platform brings forward the
//           aspect of having one-on-one conversations between a diabetic patient
//           and the specialists, giving new diabetic patients insights and a sense
//           of belonging.
//         </p>
//         <p>
//           The system incorporates mobile technologies and solutions with
//           resources in the form of articles, applications, and virtual
//           engagements that are built to help patients better communicate with
//           the doctor, reduce stigma around their health and improve their
//           livelihood by improving the mental and physical health of the
//           patients.
//         </p>
//       </>
//     ),
//     badge: ["Flutter", "Dart", "Firebase", "Github", "Figma"],
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];
