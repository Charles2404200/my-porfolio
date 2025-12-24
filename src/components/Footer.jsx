export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-zinc-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Le Anh Minh</div>
        <div className="flex gap-4">
          <a className="hover:text-zinc-200" href="https://github.com/Charles2404200" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-zinc-200" href="mailto:leanhminh123@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
