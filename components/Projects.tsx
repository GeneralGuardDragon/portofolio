import { FaGithub } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { profile, projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="proyek" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub Repositories"
          title="Proyek & Eksperimen Kode"
          description={
            <>
              Koleksi repositori publik dan privat resmi di GitHub{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-500 hover:underline"
              >
                @{profile.githubUser}
              </a>
              .
            </>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const isPublic = p.visibility === "Public";
            return (
              <div
                key={p.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                          isPublic
                            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {p.visibility}
                      </span>
                      {p.license && (
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-slate-800">
                          {p.license}
                        </span>
                      )}
                    </div>
                    <a
                      href={`${profile.github}/${p.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Repositori ${p.name}`}
                      className="text-slate-400 transition-colors hover:text-brand-500"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {p.name}
                  </h4>
                  <p className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500 dark:border-slate-800">
                  <span className={`h-3 w-3 rounded-full ${p.langColor}`} />
                  <span>{p.language}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
