export const siteConfig = {
  name: "KSP CU Sinar Sejahtera",
  tagline: "SMART — Sejahtera, Mandiri, Amanah, Responsif, dan Terpercaya",
  description: "Koperasi Simpan Pinjam terpercaya di Tarakan dengan bunga kompetitif, transparan, dan fokus pada kesejahteraan anggota. Simpanan hingga 7%, pinjaman mulai 1%.",
  
  contact: {
    address: "Jl. Aki Pingka RT.02 No.02, Tarakan, Kalimantan Utara",
    phone: "+62 812-3456-7890", // TO BE PROVIDED
    email: "info@kspcusinar.com", // TO BE PROVIDED
    whatsapp: "+62 812-3456-7890", // TO BE PROVIDED
    officeHours: "Senin - Jumat: 08:00 - 16:00 WIB, Sabtu: 08:00 - 12:00 WIB"
  },
  
  social: {
    facebook: "", // OPTIONAL
    instagram: "", // OPTIONAL
    twitter: "" // OPTIONAL
  },
  
  stats: {
    members: 785,
    membersFormatted: "785+",
    assets: "10 Miliar",
    assetsFormatted: "Rp 10M+"
  },
  
  organization: {
    founded: "2014-05-17",
    foundedYear: 2014,
    legalEntity: "2015-02-28",
    legalEntityNumber: "[TO BE PROVIDED]"
  },
  
  navigation: {
    main: [
      { name: "Beranda", href: "/" },
      { name: "Tentang Kami", href: "/about" },
      { name: "Layanan", href: "/layanan" },
      { name: "Keanggotaan", href: "/keanggotaan" },
      { name: "Transparansi", href: "/transparansi" },
      { name: "Berita", href: "/berita" },
      { name: "Kontak", href: "/kontak" }
    ],
    footer: {
      quickLinks: [
        { name: "Tentang Kami", href: "/about" },
        { name: "Layanan", href: "/layanan" },
        { name: "Keanggotaan", href: "/keanggotaan" },
        { name: "Transparansi", href: "/transparansi" }
      ],
      products: [
        { name: "Simpanan", href: "/layanan#simpanan" },
        { name: "Pinjaman", href: "/layanan#pinjaman" },
        { name: "Keanggotaan", href: "/keanggotaan" }
      ]
    }
  },
  
  smartValues: [
    {
      letter: "S",
      title: "Sejahtera",
      description: "Meningkatkan kesejahteraan anggota melalui layanan keuangan yang adil dan menguntungkan"
    },
    {
      letter: "M",
      title: "Mandiri",
      description: "Mendorong kemandirian ekonomi anggota dengan akses mudah ke layanan simpan pinjam"
    },
    {
      letter: "A",
      title: "Amanah",
      description: "Mengelola dana anggota dengan penuh tanggung jawab dan transparansi"
    },
    {
      letter: "R",
      title: "Responsif",
      description: "Cepat tanggap terhadap kebutuhan dan aspirasi anggota"
    },
    {
      letter: "T",
      title: "Terpercaya",
      description: "Membangun kepercayaan melalui layanan profesional dan akuntabel"
    }
  ]
};

export type SiteConfig = typeof siteConfig;
