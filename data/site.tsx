import type { IconType } from "react-icons";
import {
  FaAward,
  FaCertificate,
  FaCloud,
  FaGithub,
  FaLinux,
  FaNetworkWired,
  FaRedhat,
} from "react-icons/fa6";

export const profile = {
  name: "Muhammad Farhan",
  email: "workjob.mf@gmail.com",
  location: "Magelang Tengah, Jawa Tengah, Indonesia",
  githubUser: "GeneralGuardDragon",
  github: "https://github.com/GeneralGuardDragon",
  linkedin: "https://www.linkedin.com/in/muhammadfarhan-barqom/",
  linkedinHandle: "muhammadfarhan-barqom",
};

export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Pendidikan & Bio" },
  { href: "#sertifikasi", label: "Sertifikasi" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
];

export const education = [
  {
    period: "2023 - 2027",
    title: "Universitas Muhammadiyah Magelang",
    subtitle: "Mahasiswa Perguruan Tinggi",
    current: true,
  },
  {
    period: "Lulusan",
    title: "SMK IT Ihsanul Fikri",
    subtitle: "Sekolah Menengah Kejuruan Teknologi Informasi",
    current: false,
  },
];

export type Certification = {
  icon: IconType;
  iconBox: string;
  badge: string;
  badgeText: string;
  title: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    icon: FaNetworkWired,
    iconBox: "bg-rose-500/10 text-rose-500",
    badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    badgeText: "Jaringan MikroTik",
    title: "MikroTik Certified Network Associate (MTCNA)",
    description:
      "Sertifikasi kompetensi pengelolaan router, routing, firewall, dan bandwidth management berbasis RouterOS MikroTik.",
  },
  {
    icon: FaRedhat,
    iconBox: "bg-red-500/10 text-red-600",
    badge: "bg-red-500/10 text-red-600 dark:text-red-400",
    badgeText: "Certificate of Attendance",
    title: "Red Hat System Administration I (RH124-9.0)",
    description:
      "Pelatihan fondasi administrasi sistem Red Hat Enterprise Linux, manajemen pengguna, storage, dan command-line CLI.",
  },
  {
    icon: FaAward,
    iconBox: "bg-emerald-500/10 text-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    badgeText: "Akademik & Sains",
    title: "Sertifikat Partisipasi ASTPTMA",
    description:
      "Asosiasi Sains dan Teknologi Perguruan Tinggi Muhammadiyah 'Aisyiyah (ASTPTMA).",
  },
  {
    icon: FaCertificate,
    iconBox: "bg-amber-500/10 text-amber-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    badgeText: "Workshop & Program",
    title: "WCP 2023 Certificate",
    description:
      "Sertifikat program keikutsertaan World Class Professor / Workshop 2023.",
  },
];

export const skills: {
  icon: IconType;
  iconColor: string;
  title: string;
  subtitle: string;
}[] = [
  {
    icon: FaNetworkWired,
    iconColor: "text-brand-500",
    title: "MikroTik & Networking",
    subtitle: "Routing & Firewall",
  },
  {
    icon: FaLinux,
    iconColor: "text-slate-700 dark:text-slate-300",
    title: "Linux System Admin",
    subtitle: "Red Hat / RH124",
  },
  {
    icon: FaGithub,
    iconColor: "text-slate-900 dark:text-white",
    title: "Git & Version Control",
    subtitle: "@GeneralGuardDragon",
  },
  {
    icon: FaCloud,
    iconColor: "text-sky-500",
    title: "Cloudflare Pages",
    subtitle: "Static Site Hosting",
  },
];

export type Project = {
  name: string;
  description: string;
  visibility: "Public" | "Private";
  license?: string;
  language: string;
  langColor: string;
};

export const projects: Project[] = [
  {
    name: "Helmet-Detection-YOLOv8",
    description:
      "Helmet Detection Using YOLOv8 for Computer Vision Final Project.",
    visibility: "Public",
    language: "Python",
    langColor: "bg-sky-500",
  },
  {
    name: "survei-damkar",
    description:
      "Aplikasi web sistem survei dan pendataan pemadam kebakaran berbasis JavaScript.",
    visibility: "Private",
    language: "JavaScript",
    langColor: "bg-yellow-400",
  },
  {
    name: "CodeQ-ISO25010-PMPL",
    description:
      "Pengujian kualitas kode software sesuai standar ISO 25010 untuk mata kuliah PMPL.",
    visibility: "Public",
    language: "Python",
    langColor: "bg-sky-500",
  },
  {
    name: "ISYARAv2",
    description:
      "Sistem penerjemah dan pengenalan bahasa isyarat berbasis Machine Learning versi 2.",
    visibility: "Public",
    language: "Python",
    langColor: "bg-sky-500",
  },
  {
    name: "Isarav3",
    description:
      "Pengembangan tingkat lanjut sistem pengenalan bahasa isyarat (ISYARA v3).",
    visibility: "Public",
    language: "Python",
    langColor: "bg-sky-500",
  },
  {
    name: "Deteksi-Plat-Nomer",
    description:
      "Antarmuka web interaktif untuk sistem pengenalan dan deteksi plat nomor kendaraan.",
    visibility: "Public",
    language: "HTML",
    langColor: "bg-orange-500",
  },
  {
    name: "Pustakawan",
    description:
      "Sistem informasi manajemen perpustakaan, kearsipan buku, dan peminjaman berbasis PHP.",
    visibility: "Public",
    license: "MIT",
    language: "PHP",
    langColor: "bg-indigo-500",
  },
  {
    name: "CI4_Akademik_System",
    description:
      "Sistem informasi akademik perkuliahan yang dibangun dengan CodeIgniter 4 framework.",
    visibility: "Private",
    license: "MIT",
    language: "PHP",
    langColor: "bg-indigo-500",
  },
  {
    name: "TaskMahasiswa",
    description: "Aplikasi manajemen tugas harian dan perkuliahan mahasiswa.",
    visibility: "Public",
    language: "HTML",
    langColor: "bg-orange-500",
  },
];
