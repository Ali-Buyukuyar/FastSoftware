import { siteContent } from "../../data/siteContent";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="hakkimda" className="border-b border-steel/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs text-blueprint-bright">Pafta No. AB-002</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-chalk">
              Hakkımda
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-chalk">{about.name}</h3>
              <p className="mt-1 font-mono text-sm text-blueprint-bright">
                {about.role}
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-steel-light">
                {about.bio}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs text-steel-light">Kullandığım Teknolojiler</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {about.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-sm border border-steel/30 px-2.5 py-1 font-mono text-xs text-chalk"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs text-steel-light">İlgi Alanlarım</h4>
                <ul className="mt-3 space-y-1.5">
                  {about.interests.map((interest) => (
                    <li key={interest} className="text-sm text-steel-light">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
