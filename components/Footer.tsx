export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-center dark:border-slate-800 dark:bg-slate-950">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        &copy; {new Date().getFullYear()} Muhammad Farhan. Dipublikasikan via
        Cloudflare Pages.
      </p>
    </footer>
  );
}
