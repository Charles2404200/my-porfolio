import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "../data/projects.js";

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-3 text-zinc-300">{children}</div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(null);

  // Close modal with ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
          <h1 className="text-xl font-semibold">Project not found</h1>
          <p className="text-zinc-400 mt-2">
            The project slug does not exist.
          </p>
          <Link
            to="/projects"
            className="inline-block mt-4 px-4 py-2 rounded-xl border border-zinc-800 hover:bg-zinc-900/60"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <Link
            to="/projects"
            className="text-sm text-zinc-400 hover:text-zinc-200"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold mt-2">{project.title}</h1>
          <p className="text-zinc-400 mt-2">{project.tagline}</p>
        </div>

        <div className="flex gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold hover:opacity-90"
          >
            View Repo ↗
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-800 hover:bg-zinc-900/60"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-8 grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Section title="Overview">
            <ul className="space-y-2 list-disc pl-5 text-sm">
              {project.overview.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </Section>

          <Section title="Key Features">
            <ul className="space-y-2 list-disc pl-5 text-sm">
              {project.features.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </Section>

          <Section title="Architecture">
            <div className="space-y-3">
              {project.architecture.map((a, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-900 bg-zinc-950 p-4"
                >
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-sm text-zinc-400 mt-1">{a.desc}</div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="space-y-4">
          <Section title="Project Info">
            <div className="text-sm space-y-3">
              <div className="flex justify-between">
                <span className="text-zinc-400">Year</span>
                <span>{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Role</span>
                <span>{project.role}</span>
              </div>
            </div>
          </Section>

          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Highlights">
            <ul className="space-y-2 list-disc pl-5 text-sm">
              {project.highlights.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </Section>
        </div>
      </div>

      {/* SCREENSHOTS */}
      {Array.isArray(project.screenshots) &&
        project.screenshots.length > 0 && (
          <section className="mt-10 rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
            <h2 className="text-lg font-semibold">Screenshots</h2>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="cursor-zoom-in rounded-xl border border-zinc-800 bg-black object-cover hover:opacity-90 transition"
                  loading="lazy"
                  onClick={() => setActiveImage(src)}
                />
              ))}
            </div>
          </section>
        )}

      {/* MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Full screenshot"
            className="max-h-full max-w-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
