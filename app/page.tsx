import Image from "next/image";
import Hero from "../public/landscape.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <main className="px-40 py-4">
        {/* hero section */}
        <div className=" relative">
          <div className="flex p-4 flex-col justify-start md:items-center h-[512px] md:mx-10 mx-2 w-full">
            <Image
              src={Hero}
              alt="Hero image"
              className="rounded-md"
              fill
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-10 ml-10 text-white font-medium ">
            <h1 className="text-2xl md:text-4xl font-bold mt-2 md:mt-4">
              Welcome to Think Space
            </h1>
            <p className="text-sm md:text-base mt-2 md:mt-4">
              A place for projects, thought processes and more about me
            </p>
          </div>
        </div>

        {/* recent blogs */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between md:items-start py-4 md:my-2">
            <h1 className="font-bold text-lg md:text-2xl">
              Featured Projects
            </h1>
          </div>
          {/* card */}
          <div className="justify-start items-start flex flex-col md:flex-row flex-wrap gap-6 md:gap-14 ">
            <Cards
              title="Migration to linear 101"
              imageSrc={"/card.jpg"}
              width1={300}
              height1={200}
              altText1={"Hero image"}
              linkTo={"/Blogs/id"}
              desc={
                "Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started"
              }
              linkSrc={"/arrow-up-right.svg"}
              width2={20}
              height2={20}
              altText2={"Hero image"}
            />
            <Cards
              title="Migration to linear 101"
              imageSrc={"/card.jpg"}
              width1={300}
              height1={200}
              altText1={"Hero image"}
              linkTo={"/Blogs/id"}
              desc={
                "Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started"
              }
              linkSrc={"/arrow-up-right.svg"}
              width2={20}
              height2={20}
              altText2={"Hero image"}
            />
            <Cards
              title="Migration to linear 101"
              imageSrc={"/card.jpg"}
              width1={300}
              height1={200}
              altText1={"Hero image"}
              linkTo={"/Blogs/id"}
              desc={
                "Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started"
              }
              linkSrc={"/arrow-up-right.svg"}
              width2={20}
              height2={20}
              altText2={"Hero image"}
            />
          </div>
          <p className="font-bold text-lg md:text-2xl mt-10">Trending Posts</p>
          <div className="my-8 md:flex md:justify-between">
            {/* text */}
            <div>
              <p className="font-bold text-xl pb-2">The Art of the Doodle</p>
              <p className="text-[#3D4D5C] pb-4">A deep dive into the art of doodling</p>
              <button type="button" className="px-4 py-2 rounded-md bg-[#F0F2F5]">Read More</button>
            </div>
            {/* image */}
            <div className="w-[304px] h-[171px] relative rounded-lg">
             <Image
             src={"/image.png"}
             layout="fill"
             alt="image"
             />
            </div>
          </div>

          <div className="my-8 md:flex md:justify-between">
            {/* text */}
            <div>
              <p className="font-bold text-xl pb-2">The Art of the Doodle</p>
              <p className="text-[#3D4D5C] pb-4">A deep dive into the art of doodling</p>
              <button type="button" className="px-4 py-2 rounded-md bg-[#F0F2F5]">Read More</button>
            </div>
            {/* image */}
            <div className="w-[304px] h-[171px] relative rounded-lg">
             <Image
             src={"/image.png"}
             layout="fill"
             alt="image"
             />
            </div>
          </div>
        </div>
        
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}
