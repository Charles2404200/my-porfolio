function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function RepoCard({ repo }) {
  return (
    <div className="h-full rounded-2xl border border-zinc-900 bg-zinc-950 p-5 hover:bg-zinc-900/30 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg leading-snug">
            <a
              className="hover:underline"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          </h3>
          <p className="text-sm text-zinc-400 mt-1 line-clamp-2">
            {repo.description || "No description yet."}
          </p>
        </div>

        <span className="text-xs px-2 py-1 rounded-full border border-zinc-800 text-zinc-300">
          {repo.language}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
        <span className="ml-auto">Updated {formatDate(repo.updated_at)}</span>
      </div>

      {repo.homepage ? (
        <div className="mt-4">
          <a
            className="text-sm text-zinc-200 underline underline-offset-4"
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
          >
            Live / Demo ↗
          </a>
        </div>
      ) : null}
    </div>
  );
}
