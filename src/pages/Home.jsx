import { skills } from "../data/skills";
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-7">
          <p className="text-sm text-zinc-400">Hi, I’m</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Le Anh Minh
          </h1>
          <p className="text-zinc-300 mt-4 leading-relaxed">
            I build full-stack web apps and tooling projects — from microservices
            and gateways to admin dashboards, databases, and UI systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Charles2404200"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-800 text-zinc-200 hover:bg-zinc-900/60"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-4">
              <div className="text-zinc-400">Focus</div>
              <div className="font-semibold mt-1">Full-stack</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-4">
              <div className="text-zinc-400">Stack</div>
              <div className="font-semibold mt-1">React / Node / DB</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-7">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="text-sm text-zinc-400 mt-2">
            A snapshot of what I work with most often.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-900 bg-zinc-950 p-5"
              >
                <div className="font-semibold">{group.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-900 bg-zinc-950 p-5">
            <div className="font-semibold">What I’m looking for</div>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
              Internship / part-time opportunities where I can ship features, improve
              performance, and build clean, maintainable systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
