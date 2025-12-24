import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

function ProjectCard({ p }) {
  return (
    <Link
      to={`/projects/${p.slug}`}
      className="group rounded-2xl border border-zinc-900 bg-zinc-950 p-6 hover:bg-zinc-900/30 transition block"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">
            {p.title}
          </h3>
          <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
            {p.tagline}
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-300">
          {p.year}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.slice(0, 6).map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-200"
          >
            {s}
          </span>
        ))}
        {p.stack.length > 6 ? (
          <span className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-400">
            +{p.stack.length - 6} more
          </span>
        ) : null}
      </div>

      <div className="mt-5 text-sm text-zinc-300 flex items-center gap-2">
        <span className="opacity-80">View details</span>
        <span className="translate-x-0 group-hover:translate-x-1 transition">→</span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-sm text-zinc-400 mt-2">
            Projects I’ve intentionally built and documented in detail.
          </p>
        </div>

        <a
          href="https://github.com/Charles2404200"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border border-zinc-800 text-zinc-200 hover:bg-zinc-900/60"
        >
          GitHub ↗
        </a>
      </div>

      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
