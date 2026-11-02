import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";
import { profile } from "@/data/site";

export default function Hero() {
  const socialClass =
    "flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200/60 text-slate-700 transition-all hover:bg-brand-500 hover:text-white dark:bg-slate-800/60 dark:text-slate-300";

  return (
    <section
      id="beranda"
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden py-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-500/15" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1.5 text-xs font-medium text-brand-600 dark:text-brand-500 sm:text-sm">
              <FaLocationDot className="text-brand-500" />
              {profile.location}
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Muhammad{" "}
              <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">
                Farhan
              </span>
            </h1>
            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
              Mahasiswa &amp; Network / Systems Engineer
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0">
              Mahasiswa <strong>Universitas Muhammadiyah Magelang</strong> yang
              berfokus pada Jaringan Komputer, Administrasi Sistem Linux, dan
              Pengembangan Aplikasi Web. Berpengalaman dengan MikroTik, Red Hat
              Enterprise Linux, serta infrastruktur cloud.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <a
                href="#kontak"
                className="w-full rounded-xl bg-brand-500 px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40 sm:w-auto"
              >
                Hubungi Saya <FaPaperPlane className="ml-2 inline text-sm" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-full rounded-xl border border-slate-300 px-8 py-3.5 text-center font-semibold transition-all hover:border-brand-500 hover:text-brand-500 dark:border-slate-700 dark:hover:border-brand-500 dark:hover:text-brand-500 sm:w-auto"
              >
                <FaEnvelope className="mr-2 inline" /> Kirim Email
              </a>
            </div>

            <div className="flex items-center justify-center gap-5 pt-4 lg:justify-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Tautan Resmi:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title={`GitHub: ${profile.githubUser}`}
                className={socialClass}
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
                className={socialClass}
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                title="Email Direct"
                className={socialClass}
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-brand-500 to-amber-400 opacity-30 blur-2xl" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-800 shadow-2xl dark:border-slate-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Muhammad Farhan"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-xl text-brand-500 dark:bg-orange-950/50">
                  <FaGraduationCap />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Pendidikan
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    UNIMMA (2023 - 2027)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
