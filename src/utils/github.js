const USERNAME = "Charles2404200";

/**
 * Fetch public repos sorted by last updated
 * Note: GitHub API rate-limit for unauthenticated requests.
 */
export async function fetchRepos({ signal } = {}) {
  const url = new URL(`https://api.github.com/users/${USERNAME}/repos`);
  url.searchParams.set("per_page", "100");
  url.searchParams.set("sort", "updated");

  const res = await fetch(url.toString(), {
    signal,
    headers: {
      "Accept": "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GitHub API error: ${res.status} ${res.statusText} ${text}`);
  }

  const data = await res.json();

  // Keep only what we need + sort pinned-like (updated desc)
  return data
    .map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description ?? "",
      html_url: r.html_url,
      homepage: r.homepage ?? "",
      language: r.language ?? "Unknown",
      stargazers_count: r.stargazers_count ?? 0,
      forks_count: r.forks_count ?? 0,
      updated_at: r.updated_at,
      topics: Array.isArray(r.topics) ? r.topics : [],
      private: r.private,
      archived: r.archived,
      fork: r.fork,
    }))
    .filter((r) => !r.private);
}

export { USERNAME };
