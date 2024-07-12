import Link from "next/link";
import { allsoftwarePJS } from "./Projects/Requests";
import Hero from "../components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/ui/tabs";
import MagicButton from "../components/MagicButton";
import TracingCard from "../components/TracingCard";
import DesignsPage from "../components/designs/DesignsPage";
import { alldesigns } from "./Blogs/Requests";


const Home = async () => {
  const softwaredata = await allsoftwarePJS();
  const designs = await alldesigns();

  return (
    <>
      <Hero />
      <div className="mx-auto">
        <Tabs defaultValue="software" className="w-full p-4 md:px-10 px-4 ">
          <TabsList className="grid w-full grid-cols-2  shadow-lg">
            <TabsTrigger value="software" className="hover:bg-purple-800 hover:dark:bg-purple-200 hover:text-slate-50 hover:dark:text-slate-900">
              Software Projects
            </TabsTrigger>
            <TabsTrigger value="design" className="hover:bg-purple-800 hover:dark:bg-purple-200 hover:text-slate-50 hover:dark:text-slate-900">UI/UX Projects</TabsTrigger>
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
                <Link href="/Riishi/Projects" className="gap-2">
                  <MagicButton title={"All Software Projects"} />
                </Link>
              </div>
            </div>
            <TracingCard content={softwaredata} />
          </TabsContent>
          <TabsContent value="design">
            <div className="py-4 m-6 space-y-2 md:flex md:justify-between">
              <div>
                <p className="font-bold md:text-4xl">
                  Featured Product Designs
                </p>
                <p className="text-sm">Recently completed UI/UX Designs</p>
              </div>
              <div>
                <Link href="/Riishi/Blogs" className="gap-2">
                  <MagicButton title={"All Product Design Projects"} />
                </Link>
              </div>
            </div>
            <DesignsPage content={designs} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
