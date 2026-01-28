import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: "KSP CU Sinar Sejahtera",
  tagline: "SMART — Sejahtera, Mandiri, Amanah, Responsif, dan Terpercaya",
  description: "Koperasi Simpan Pinjam terpercaya di Tarakan dengan bunga kompetitif, transparan, dan fokus pada kesejahteraan anggota. Simpanan hingga 7%, pinjaman mulai 1%.",
  contact: {
    address: "Jl. Aki Pingka RT.02 No.02, Tarakan, Kalimantan Utara",
    phone: "[TO BE PROVIDED]",
    email: "[TO BE PROVIDED]",
    whatsapp: "[TO BE PROVIDED]",
    officeHours: "[TO BE PROVIDED]",
  },
  social: {
    facebook: undefined,
    instagram: undefined,
    twitter: undefined,
  },
  stats: {
    members: 785,
    assets: "10 Miliar",
  },
};

// Navigation menu items
export const navigationItems = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Layanan", href: "/layanan" },
  { name: "Keanggotaan", href: "/keanggotaan" },
  { name: "Transparansi", href: "/transparansi" },
  { name: "Berita", href: "/berita" },
  { name: "Kontak", href: "/kontak" },
];
