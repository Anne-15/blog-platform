import Image from "next/legacy/image";
import Hero from "../public/featured.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      {/* navbar */}
      <Navbar />
      {/* hero section */}
      <div className=" relative">
        <div className="flex p-4 flex-col justify-start items-center w-[960px] h-[512px] mx-10">
          <Image
            src={Hero}
            // width={1700}
            layout="fill"
            alt="Hero image"
            className=""
          />
        </div>

        {/* <div className='absolute top-0 left-0 flex justify-between text-white font-medium'>
          <Navbar/>
        </div> */}
        <div className="absolute bottom-0 left-0 p-10 ml-10 text-white font-medium">
          <h1 className="text-2xl md:text-4xl font-bold mt-2 md:mt-4">
            Welcome to Think Space
          </h1>
          <p className="text-sm md:text-base mt-2 md:mt-4">
            A place for projects, thought processes and more about me
          </p>
        </div>
      </div>

      {/* recent blogs */}
      <div className="container mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10">
          <h1 className="font-bold text-lg md:text-2xl mx-6 md:mx-20">
            Recent blogs
          </h1>
          <Link href={"/Blogs"}>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <p className="font-bold text-sm md:text-lg">view more</p>
              <Image
                src={"/arrow-up-right.svg"}
                alt="view more"
                width={15}
                height={15}
                className=""
              />
            </div>
          </Link>
        </div>
        {/* card */}
        <div className="flex flex-col md:flex-row flex-wrap mx-6 md:mx-24 gap-6 md:gap-10 mt-4 md:mt-10">
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
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10">
          <h1 className="font-bold text-lg md:text-2xl mx-6 md:mx-20">
            Recent projects
          </h1>
          <Link href={"/Projects"}>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <p className="font-bold text-sm md:text-lg">view more</p>
              <Image
                src={"/arrow-up-right.svg"}
                alt="view more"
                width={15}
                height={15}
                className=""
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap mx-6 md:mx-24 gap-6 md:gap-10 mt-4 md:mt-10">
          <Cards
            title="Migration to linear 101"
            imageSrc={"/card.jpg"}
            width1={300}
            height1={200}
            altText1={"Hero image"}
            linkTo={"/Projects/id"}
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
            linkTo={"/Projects/id"}
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
            linkTo={"/Projects/id"}
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
            linkTo={"/Projects/id"}
            desc={
              "Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started"
            }
            linkSrc={"/arrow-up-right.svg"}
            width2={20}
            height2={20}
            altText2={"Hero image"}
          />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </main>
  );
}
