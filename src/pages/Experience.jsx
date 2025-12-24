import { experiences } from "../data/experience";

function ExperienceCard({ exp }) {
  return (
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
      <div className="flex flex-wrap justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{exp.role}</h3>
          <p className="text-zinc-400 text-sm">
            {exp.company} · {exp.type}
          </p>
        </div>
        <div className="text-sm text-zinc-400">{exp.period}</div>
      </div>

      <div className="mt-4 space-y-4">
        <div>
          <div className="font-semibold text-sm">Overview</div>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-zinc-300">
            {exp.overview.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold text-sm">Responsibilities</div>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-zinc-300">
            {exp.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold text-sm">Highlights</div>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-zinc-300">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {exp.stack.map((s, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-zinc-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold">Work Experience</h1>
      <p className="mt-2 text-zinc-400 max-w-2xl">
        A summary of my professional experience across software development,
        web systems, and localization projects.
      </p>

      <div className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
}
