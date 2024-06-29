"use client";
import Footer from "@/app/components/Footer";
import MagicButton from "@/app/components/MagicButton";
import Navbar from "@/app/components/Navbar";
import { BackgroundGradient } from "@/app/components/ui/background-gradient";
import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* header image */}
      <div className="mt-20 bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
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
                <MagicButton title={"View Hi-Fi Prototype"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* table of contents */}
      <div></div>
    </div>
  );
};

export default page;
