import ProjectsGrid from "./components/projects/ProjectsGrid";
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
            {/* <div className="md:grid md:grid-cols-2 gap-4 px-10">
              {projects.length === 0 ? (
                <div>No Projects Found</div>
              ) : (
                projects.map(({ id, title, des, img, iconLists, link }) => (
                  <div key={id}>
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                          {title}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                          {des}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                          <Image
                            src={img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                          <CardItem
                            translateZ={20}
                            as="button"
                            target="__blank"
                            className="flex flex-row"
                          >
                            {iconLists.length === 0 ? (
                              <div>No data</div>
                            ) : (
                              iconLists.map((icon) => (
                                <div
                                  key={icon}
                                  className="border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                >
                                  <img src={icon} alt={icon} className="p-2" />
                                </div>
                              ))
                            )}
                          </CardItem>
                          <CardItem
                            translateZ={20}
                            as={Link}
                            href={link}
                            className=""
                          >
                              <MagicButton title={"Learn More"} />
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                  </div>
                ))
              )}
            </div> */}
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
            <ProjectsGrid />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
