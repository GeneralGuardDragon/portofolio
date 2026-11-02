import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/site";

export default function Certifications() {
  return (
    <section id="sertifikasi" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kredensial Resmi"
          title="Sertifikasi & Pelatihan"
          description="Sertifikat keahlian dalam jaringan komputer, administrasi sistem Linux, serta partisipasi akademik."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${c.iconBox}`}
                >
                  <Icon />
                </div>
                <div>
                  <span
                    className={`rounded px-2.5 py-0.5 text-xs font-bold ${c.badge}`}
                  >
                    {c.badgeText}
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {c.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
