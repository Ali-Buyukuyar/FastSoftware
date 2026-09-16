import { siteContent } from "../../data/siteContent";

export default function Footer() {
  const { about, footer } = siteContent;

  return (
    <footer className="border-t border-steel/20 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="font-mono text-xs text-steel-light">{footer.text}</p>
        <div className="flex gap-6 font-mono text-xs text-steel-light">
          <a href={about.social.github} className="hover:text-blueprint-bright">
            GitHub
          </a>
          <a href={about.social.linkedin} className="hover:text-blueprint-bright">
            LinkedIn
          </a>
          <a href={about.social.email} className="hover:text-blueprint-bright">
            E-posta
          </a>
        </div>
      </div>
    </footer>
  );
}
