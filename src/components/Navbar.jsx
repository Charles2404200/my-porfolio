import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-xl text-sm font-medium transition border border-transparent";
const linkActive = "bg-zinc-900 border-zinc-800";
const linkIdle = "text-zinc-300 hover:text-white hover:bg-zinc-900/60";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* BRAND */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-zinc-900 border border-zinc-800 grid place-items-center font-bold">
            M
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Le Anh Minh</div>
            <div className="text-xs text-zinc-400">Portfolio</div>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Projects
          </NavLink>

          {/* NEW: EXPERIENCE */}
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            Experience
          </NavLink>

          <a
            className={`${linkBase} ${linkIdle}`}
            href="https://github.com/Charles2404200"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
