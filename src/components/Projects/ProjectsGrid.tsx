import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

export default function ProjectsGrid() {
  const [active, setActive] = useState<Project | null>(null);
  const published = projects
    .filter((p) => p.isPublished)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section id="projeler" className="border-b border-steel/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-blueprint-bright">Pafta No. AB-003</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-chalk">Projeler</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {published.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      {active && <ProjectDetail project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
