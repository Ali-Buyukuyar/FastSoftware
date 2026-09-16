import { siteContent } from "../../data/siteContent";

export default function Contact() {
  const { contact, about } = siteContent;

  return (
    <section id="iletisim" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-blueprint-bright">Pafta No. AB-004</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-chalk">İletişim</h2>
        <p className="mt-6 max-w-xl text-steel-light">{contact.description}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${contact.email}`}
            className="border border-blueprint/50 px-5 py-3 font-mono text-sm text-blueprint-bright transition-colors hover:bg-blueprint/10"
          >
            {contact.email}
          </a>
          <div className="flex gap-6 font-mono text-sm text-steel-light">
            <a href={about.social.github} className="hover:text-blueprint-bright">
              GitHub
            </a>
            <a href={about.social.linkedin} className="hover:text-blueprint-bright">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
