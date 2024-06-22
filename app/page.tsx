import Hero from "./components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import MagicButton from "./components/MagicButton";
import { CardBody, CardContainer, CardItem } from "./components/Card";
import Image from "next/image";
import { projects } from "@/data/projects"; // Ensure this import is correct
import TracingCard from "./components/TracingCard";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto">
        <Tabs defaultValue="software" className="w-full p-4 md:px-10 px-4 ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="software" className="">
              Software Project Blogs
            </TabsTrigger>
            <TabsTrigger value="design">UI/UX Project Blogs</TabsTrigger>
          </TabsList>
          <TabsContent value="software">
            <div className="py-4 m-6 space-y-2 md:flex md:justify-between">
              <div>
                <p className="font-bold md:text-4xl">
                  Featured Software Engineering Projects
                </p>
                <p className="text-sm">Recently completed work/projects</p>
              </div>
              <div>
                <Link href="/Projects" className="gap-2">
                  <MagicButton title={"All Software Projects"} />
                </Link>
              </div>
            </div>
            <TracingCard/>
          </TabsContent>
          <TabsContent value="design">
            <div className="py-2 text-center space-y-2">
              <p className="font-bold md:text-4xl">Featured Product Designs</p>
              <p className="text-sm">Recently completed UI/UX Designs</p>
              <Link href="/Blogs">
                <button className="text-sm font-bold">view all projects</button>
              </Link>
            </div>
            {/* <ProjectsGrid /> */}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
