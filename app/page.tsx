import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import Hero from "./components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto">
        <Tabs
          defaultValue="software"
          className="w-full p-4 md:px-10 px-4 "
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="software" className="">
              Software Project Blogs
            </TabsTrigger>
            <TabsTrigger value="design">UI/UX Project Blogs</TabsTrigger>
          </TabsList>
          <TabsContent value="software">
            <p className="font-bold md:text-2xl">Featured Projects</p>
            <ProjectsGrid />
          </TabsContent>
          <TabsContent value="design">
            <p className="font-bold md:text-2xl">Featured Product Designs</p>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
