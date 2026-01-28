import type { NewsArticle } from '@/types';

/**
 * News Articles Data (Placeholder)
 */
export const newsArticles: NewsArticle[] = [
  {
    slug: 'rapat-anggota-tahunan-2025',
    title: 'Rapat Anggota Tahunan 2025 Sukses Digelar',
    excerpt: 'KSP CU Sinar Sejahtera menggelar Rapat Anggota Tahunan (RAT) 2025 dengan dihadiri lebih dari 500 anggota. RAT membahas laporan keuangan dan program kerja tahun mendatang.',
    content: `
# Rapat Anggota Tahunan 2025 Sukses Digelar

KSP CU Sinar Sejahtera menggelar Rapat Anggota Tahunan (RAT) 2025 pada hari Sabtu, 15 Januari 2025 di Aula Koperasi. Acara dihadiri oleh lebih dari 500 anggota yang antusias mengikuti jalannya rapat.

## Laporan Keuangan

Dalam RAT ini, pengurus menyampaikan laporan keuangan tahun 2024 yang menunjukkan pertumbuhan positif. Total aset koperasi mencapai Rp 10 Miliar dengan jumlah anggota aktif sebanyak 785 orang.

## Program Kerja 2025

Beberapa program kerja yang akan dilaksanakan di tahun 2025 antara lain:
- Peningkatan layanan digital
- Edukasi keuangan untuk anggota
- Perluasan jaringan kerjasama
- Peningkatan kesejahteraan anggota

## Pembagian SHU

Anggota juga menerima pembagian Sisa Hasil Usaha (SHU) tahun 2024 yang dibagikan sesuai dengan partisipasi masing-masing anggota.
    `,
    featuredImage: '/images/news/rat-2025.jpg',
    date: '2025-01-15',
    category: 'Acara',
    author: 'Tim Redaksi',
  },
  {
    slug: 'peluncuran-simpanan-pendidikan',
    title: 'Peluncuran Produk Simpanan Pendidikan',
    excerpt: 'KSP CU Sinar Sejahtera meluncurkan produk baru Simpanan Pendidikan dengan bunga 7% per tahun untuk membantu anggota mempersiapkan dana pendidikan anak.',
    content: `
# Peluncuran Produk Simpanan Pendidikan

KSP CU Sinar Sejahtera dengan bangga meluncurkan produk terbaru kami, Simpanan Pendidikan, yang dirancang khusus untuk membantu para orang tua mempersiapkan dana pendidikan anak-anak mereka.

## Keunggulan Simpanan Pendidikan

Produk ini menawarkan beberapa keunggulan:
- Bunga kompetitif 7% per tahun
- Setoran fleksibel mulai dari Rp 50.000/bulan
- Target waktu yang dapat disesuaikan
- Bonus di akhir periode

## Cara Bergabung

Untuk membuka Simpanan Pendidikan, anggota cukup:
1. Mengisi formulir pembukaan rekening
2. Setoran awal minimal Rp 100.000
3. Komitmen setoran rutin minimal Rp 50.000/bulan

Hubungi kantor kami untuk informasi lebih lanjut!
    `,
    featuredImage: '/images/news/simpanan-pendidikan.jpg',
    date: '2024-12-10',
    category: 'Produk',
    author: 'Tim Redaksi',
  },
  {
    slug: 'edukasi-keuangan-anggota',
    title: 'Program Edukasi Keuangan untuk Anggota',
    excerpt: 'Koperasi mengadakan program edukasi keuangan gratis untuk anggota dengan tema "Mengelola Keuangan Keluarga dengan Bijak".',
    content: `
# Program Edukasi Keuangan untuk Anggota

KSP CU Sinar Sejahtera berkomitmen untuk meningkatkan literasi keuangan anggota melalui program edukasi keuangan yang diadakan secara rutin setiap bulan.

## Tema Bulan Ini

Program edukasi bulan ini mengangkat tema "Mengelola Keuangan Keluarga dengan Bijak" yang akan membahas:
- Cara membuat anggaran keluarga
- Tips menabung efektif
- Strategi mengelola utang
- Perencanaan keuangan jangka panjang

## Jadwal dan Pendaftaran

- **Tanggal**: Sabtu, 25 Januari 2025
- **Waktu**: 09.00 - 12.00 WITA
- **Tempat**: Aula Koperasi
- **Biaya**: GRATIS untuk anggota

Daftarkan diri Anda segera karena tempat terbatas!
    `,
    featuredImage: '/images/news/edukasi-keuangan.jpg',
    date: '2024-12-01',
    category: 'Edukasi',
    author: 'Tim Redaksi',
  },
];

/**
 * Get all news articles
 */
export function getAllNews(): NewsArticle[] {
  return newsArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get news article by slug
 */
export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

/**
 * Get latest news articles
 */
export function getLatestNews(count: number = 3): NewsArticle[] {
  return getAllNews().slice(0, count);
}

/**
 * Get news by category
 */
export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => article.category === category);
}
