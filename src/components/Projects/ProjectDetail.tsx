import { useEffect } from "react";
import type { Project } from "../../types/project";

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-graphite/90 px-4 py-10 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out] md:px-6 md:py-16"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl origin-top border border-steel/30 bg-graphite-soft p-6 shadow-2xl animate-[scaleIn_0.25s_ease-out] md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-blueprint-bright">
              {project.category} · {project.status}
            </p>
            <h2 id="project-detail-title" className="mt-3 font-display text-3xl text-chalk">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-steel/30 font-mono text-steel-light transition-colors hover:border-blueprint/60 hover:text-blueprint-bright"
          >
            ✕
          </button>
        </div>

        <p className="mt-6 leading-relaxed text-steel-light">{project.description}</p>

        <div className="mt-6">
          <h3 className="font-mono text-xs text-steel-light">Amaç</h3>
          <p className="mt-2 text-sm leading-relaxed text-chalk/90">{project.purpose}</p>
        </div>

        <div className="mt-6">
          <h3 className="font-mono text-xs text-steel-light">Özellikler</h3>
          <ul className="mt-2 space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="text-sm text-chalk/90">
                — {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-steel/30 px-2.5 py-1 font-mono text-xs text-chalk"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.demoUrl || project.githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-4 border-t border-steel/20 pt-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-blueprint/50 px-4 py-2 font-mono text-xs text-blueprint-bright transition-colors hover:bg-blueprint/10"
              >
                Demo'yu görüntüle
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-steel/30 px-4 py-2 font-mono text-xs text-steel-light transition-colors hover:border-blueprint/60 hover:text-blueprint-bright"
              >
                GitHub deposu
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
