import ProjectsGrid from "./components/projects/ProjectsGrid";
import Hero from "./components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

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
            <div className="py-2 text-center space-y-2">
              <p className="font-bold md:text-4xl">Featured Software Engineering Projects</p>
              <p className="text-sm">Recently completed work/projects</p>
              <Link href="/Projects">
                <button className="text-sm font-bold">view all projects</button>
              </Link>
            </div>
            <ProjectsGrid />
          </TabsContent>
          <TabsContent value="design">
            <div className="py-2 text-center space-y-2">
              <p className="font-bold md:text-4xl">Featured Product Designs</p>
              <p className="text-sm">Recently completed UI/UX Designs</p>
              <Link href="/Blogs">
                <button className="text-sm font-bold">view all projects</button>
              </Link>
            </div>
            <ProjectsGrid />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
