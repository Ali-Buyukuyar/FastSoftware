import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero3D from "./Hero3D";
import { siteContent } from "../../data/siteContent";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 24, duration: 0.8 }, "-=0.35")
        .from(".hero-subtitle", { opacity: 0, y: 16, duration: 0.6 }, "-=0.45")
        .from(".hero-desc", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
        .from(".hero-scene", { opacity: 0, scale: 0.92, duration: 1.1 }, "-=0.9");
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden border-b border-steel/20 grid-rule"
    >
      <div className="hero-scene absolute inset-0 opacity-90">
        <Hero3D reducedMotion={reducedMotion} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24">
        <p className="hero-eyebrow font-mono text-xs text-blueprint-bright">
          Pafta No. AB-001 — Kişisel Yazılım Portföyü
        </p>
        <h1 className="hero-title mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-chalk md:text-7xl">
          {siteContent.hero.title}
        </h1>
        <p className="hero-subtitle mt-4 font-mono text-lg text-steel-light md:text-xl">
          {siteContent.hero.subtitle}
        </p>
        <p className="hero-desc mt-6 max-w-xl text-base text-steel-light md:text-lg">
          {siteContent.hero.description}
        </p>
      </div>
    </section>
  );
}
