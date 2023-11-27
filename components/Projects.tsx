"use client";

import SectionHeading from "./SectionHeading";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Project } from "./Project";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
