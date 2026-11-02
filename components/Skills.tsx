import SectionHeading from "./SectionHeading";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="keahlian" className="bg-slate-100/50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Keahlian Utama" title="Kompetensi Teknis" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon className={`mx-auto mb-3 text-3xl ${s.iconColor}`} />
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500">{s.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
