import type { Project } from "../../types/project";

const statusColor: Record<Project["status"], string> = {
  Yayında: "text-blueprint-bright border-blueprint/40",
  Geliştiriliyor: "text-brass border-brass/40",
  Arşiv: "text-steel-light border-steel/40",
};

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="register-marks group flex h-full flex-col border border-steel/25 bg-graphite-soft/60 p-6 text-left transition-colors hover:border-blueprint/60 focus-visible:border-blueprint/60"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-steel-light">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <span
          className={`rounded-sm border px-2 py-0.5 font-mono text-[11px] ${statusColor[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl text-chalk transition-colors group-hover:text-blueprint-bright">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-light">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="font-mono text-[11px] text-steel">
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-6 font-mono text-xs text-blueprint-bright opacity-0 transition-opacity group-hover:opacity-100">
        Detayları gör
      </span>
    </button>
  );
}
