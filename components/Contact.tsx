import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/site";

export default function Contact() {
  const items = [
    {
      icon: FaEnvelope,
      title: "Email",
      text: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
      breakAll: true,
    },
    {
      icon: FaLinkedinIn,
      title: "LinkedIn",
      text: profile.linkedinHandle,
      href: profile.linkedin,
      external: true,
      breakAll: false,
    },
    {
      icon: FaGithub,
      title: "GitHub",
      text: profile.githubUser,
      href: profile.github,
      external: true,
      breakAll: false,
    },
  ];

  return (
    <section id="kontak" className="bg-slate-100/50 py-20 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontak Direct"
          title="Hubungi Muhammad Farhan"
          description="Silakan hubungi saya secara langsung melalui media berikut:"
        />

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <a
                key={i.title}
                href={i.href}
                {...(i.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-2xl text-brand-500 transition-transform group-hover:scale-110">
                  <Icon />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {i.title}
                </h4>
                <p
                  className={`mt-1 text-xs text-slate-500 dark:text-slate-400 ${
                    i.breakAll ? "break-all" : ""
                  }`}
                >
                  {i.text}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
