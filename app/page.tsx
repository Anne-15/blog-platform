import Hero from "./components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import MagicButton from "./components/MagicButton";
import { CardBody, CardContainer, CardItem } from "./components/Card";
import Image from "next/image";
import TracingCard from "./components/TracingCard";
import { allsoftwarePJS } from "./Projects/Requests";
import DesignsPage from "./components/designs/DesignsPage";


const Home = async () => {
  const softwaredata = await allsoftwarePJS();

  return (
    <>
      <Hero />
      <div className="mx-auto">
        <Tabs defaultValue="software" className="w-full p-4 md:px-10 px-4 ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="software" className="">
              Software Projects
            </TabsTrigger>
            <TabsTrigger value="design">UI/UX Projects</TabsTrigger>
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
                <Link href="/Blogs" className="gap-2">
                  <MagicButton title={"All Product Design Projects"} />
                </Link>
              </div>
            </div>
            <DesignsPage />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Home;
