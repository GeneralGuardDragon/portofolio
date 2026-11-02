import { FaAddressCard } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { education, profile } from "@/data/site";

export default function About() {
  return (
    <section id="tentang" className="bg-slate-100/50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profil & Riwayat"
          title="Pendidikan & Latar Belakang"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-6">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              Siswa &amp; Teknisi Jaringan Masa Depan
            </h4>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              Saya adalah <strong>Muhammad Farhan</strong>, bertempat tinggal di
              Magelang Tengah, Jawa Tengah, Indonesia. Saat ini sedang menempuh
              studi sarjana di{" "}
              <strong>Universitas Muhammadiyah Magelang (UNIMMA)</strong>.
            </p>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              Memiliki minat mendalam pada infrastruktur jaringan mikro, sistem
              operasi Linux, administrasi server, serta rekayasa perangkat lunak
              modern. Aktif mengeksplorasi teknologi baru melalui proyek open
              source di GitHub{" "}
              <span className="font-semibold text-brand-500">
                @{profile.githubUser}
              </span>
              .
            </p>

            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h5 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <FaAddressCard className="text-brand-500" /> Kontak Cepat
              </h5>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p>
                  <strong className="text-slate-800 dark:text-slate-200">Email:</strong>{" "}
                  {profile.email}
                </p>
                <p>
                  <strong className="text-slate-800 dark:text-slate-200">GitHub:</strong>{" "}
                  github.com/{profile.githubUser}
                </p>
                <p>
                  <strong className="text-slate-800 dark:text-slate-200">LinkedIn:</strong>{" "}
                  linkedin.com/in/{profile.linkedinHandle}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <h4 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Riwayat Pendidikan
            </h4>

            <div className="relative ml-2 space-y-8 border-l-2 border-brand-500/30 pl-6">
              {education.map((e) => (
                <div key={e.title} className="group relative">
                  <div
                    className={`absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white dark:border-slate-950 ${
                      e.current ? "bg-brand-500" : "bg-slate-400 dark:bg-slate-600"
                    }`}
                  />
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <span
                      className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        e.current
                          ? "bg-brand-500/10 text-brand-500"
                          : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {e.period}
                    </span>
                    <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                      {e.title}
                    </h5>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {e.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
