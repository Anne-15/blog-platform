import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { LinkPreview } from "../ui/link-preview";
import { cn } from "@/utils/cn";

const ProjectPage = ({ project }: { project: any }) => {
  const item = project.project;

  const Section = ({
    title,
    children,
    className,
  }: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <section className={cn("py-8 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0", className)}>
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="prose prose-sm dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {children}
      </div>
    </section>
  );

  return (
    <>
      <div className="flex-1 min-h-screen overflow-y-auto">
        <main className="max-w-4xl w-full mx-auto pb-10 pt-20 px-4 md:px-10">
          <article>
            <header className="flex flex-col">
              <div className="flex justify-between items-center">
                <Link
                  href="/Riishi/Projects"
                  aria-label="Navigate back to projects"
                >
                  <div className="rounded-full hover:shadow-md w-10 h-10 flex items-center justify-center border cursor-pointer">
                    <FaArrowLeft aria-hidden="true" />
                  </div>
                </Link>
              </div>
              <h1 className="text-base md:text-xl lg:text-4xl font-semibold bg-clip-text py-4 text-neutral-900 dark:text-white">
                {item.name}
              </h1>
              <div className="w-full mt-4 aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden relative">
                <Image
                  src={item.image || "/landscape.jpg"}
                  alt={`${item.name} project header image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                  className="rounded-lg object-cover object-left-top"
                  priority
                />
              </div>
            </header>

            <Section title="The gist">
              <p>{item.desc}</p>
            </Section>

            {item.backgroundInfo && (
              <Section title="Background">
                <p>{item.backgroundInfo}</p>
              </Section>
            )}

            {item.objectives && (
              <Section title="Objectives">
                <p>{item.objectives}</p>
              </Section>
            )}

            {item.functionaliy && (
              <Section title="What I built">
                <p>{item.functionaliy}</p>
              </Section>
            )}

            {item.designs && (
              <Section title="Design">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={item.designs}
                      alt={`${item.name} design mockup or diagram`}
                      fill
                      className="rounded-lg object-contain"
                      sizes="(max-width: 768px) 100vw, 650px"
                    />
                  </div>
                </div>
              </Section>
            )}

            {(item.github || item.siteurl) && (
              <Section title="Links">
                <div className="flex flex-wrap gap-4">
                  {item.github && (
                    <span>
                      Source code:{" "}
                      <LinkPreview
                        url={item.github}
                        className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        View on GitHub
                      </LinkPreview>
                    </span>
                  )}
                  {item.siteurl && (
                    <span>
                      Live site:{" "}
                      <LinkPreview
                        url={item.siteurl}
                        className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                      >
                        Visit project
                      </LinkPreview>
                    </span>
                  )}
                </div>
              </Section>
            )}

            {item.conclusion && (
              <Section title="Conclusion">
                <p>{item.conclusion}</p>
              </Section>
            )}
          </article>
        </main>
      </div>
    </>
  );
};

export default ProjectPage;
