import type { SavingsProduct, LoanProduct } from '@/types';

/**
 * Savings Products Data
 */
export const savingsProducts: SavingsProduct[] = [
  {
    id: 'saham',
    name: 'Simpanan Saham',
    interestRate: 5,
    minDeposit: 100000,
    minBalance: 100000,
    withdrawalTerms: 'Dapat ditarik saat keluar dari keanggotaan',
    features: [
      'Wajib untuk menjadi anggota',
      'Mendapat hak suara dalam RAT',
      'Mendapat bagian SHU',
      'Bunga 5% per tahun',
    ],
    requirements: [
      'Fotokopi KTP',
      'Mengisi formulir pendaftaran',
      'Setoran awal minimal Rp 100.000',
    ],
    bestFor: 'Keanggotaan dan hak suara',
  },
  {
    id: 'sukarela',
    name: 'Simpanan Sukarela',
    interestRate: 6,
    minDeposit: 50000,
    minBalance: 0,
    withdrawalTerms: 'Dapat ditarik sewaktu-waktu',
    features: [
      'Fleksibel, bisa ditarik kapan saja',
      'Bunga 6% per tahun',
      'Tidak ada biaya administrasi',
      'Setoran bebas',
    ],
    requirements: [
      'Sudah menjadi anggota',
      'Setoran awal minimal Rp 50.000',
    ],
    bestFor: 'Tabungan jangka pendek dan dana darurat',
  },
  {
    id: 'harian',
    name: 'Simpanan Harian',
    interestRate: 5.5,
    minDeposit: 10000,
    minBalance: 0,
    withdrawalTerms: 'Dapat ditarik sewaktu-waktu',
    features: [
      'Setoran harian mulai Rp 10.000',
      'Bunga 5,5% per tahun',
      'Cocok untuk menabung rutin',
      'Dijemput petugas',
    ],
    requirements: [
      'Sudah menjadi anggota',
      'Setoran minimal Rp 10.000/hari',
    ],
    bestFor: 'Menabung rutin dengan nominal kecil',
  },
  {
    id: 'pendidikan',
    name: 'Simpanan Pendidikan',
    interestRate: 7,
    minDeposit: 100000,
    minBalance: 100000,
    withdrawalTerms: 'Jatuh tempo sesuai target pendidikan',
    features: [
      'Bunga tertinggi 7% per tahun',
      'Untuk biaya pendidikan anak',
      'Target waktu fleksibel',
      'Bonus di akhir periode',
    ],
    requirements: [
      'Sudah menjadi anggota',
      'Setoran awal minimal Rp 100.000',
      'Setoran rutin minimal Rp 50.000/bulan',
    ],
    bestFor: 'Dana pendidikan anak jangka panjang',
  },
  {
    id: 'hari-raya',
    name: 'Simpanan Hari Raya',
    interestRate: 6.5,
    minDeposit: 50000,
    minBalance: 50000,
    withdrawalTerms: 'Menjelang hari raya',
    features: [
      'Bunga 6,5% per tahun',
      'Persiapan dana hari raya',
      'Setoran rutin bulanan',
      'Bonus menjelang hari raya',
    ],
    requirements: [
      'Sudah menjadi anggota',
      'Setoran awal minimal Rp 50.000',
      'Setoran rutin minimal Rp 50.000/bulan',
    ],
    bestFor: 'Persiapan dana hari raya dan liburan',
  },
];

/**
 * Loan Products Data
 */
export const loanProducts: LoanProduct[] = [
  {
    id: 'produktif',
    name: 'Pinjaman Produktif',
    type: 'produktif',
    interestRate: 1,
    maxAmount: 50000000,
    maxTerm: 36,
    requirements: [
      'Sudah menjadi anggota minimal 3 bulan',
      'Memiliki usaha yang jelas',
      'Fotokopi KTP dan KK',
      'Surat keterangan usaha',
      'Jaminan sesuai plafon pinjaman',
      'Slip gaji atau bukti penghasilan',
    ],
    processingTime: '3-5 hari kerja',
  },
  {
    id: 'konsumtif',
    name: 'Pinjaman Konsumtif',
    type: 'konsumtif',
    interestRate: 1.5,
    maxAmount: 30000000,
    maxTerm: 24,
    requirements: [
      'Sudah menjadi anggota minimal 3 bulan',
      'Fotokopi KTP dan KK',
      'Slip gaji atau bukti penghasilan',
      'Jaminan sesuai plafon pinjaman',
      'Surat persetujuan pasangan (jika menikah)',
    ],
    processingTime: '3-5 hari kerja',
  },
];

/**
 * Get savings product by ID
 */
export function getSavingsProductById(id: string): SavingsProduct | undefined {
  return savingsProducts.find(product => product.id === id);
}

/**
 * Get loan product by ID
 */
export function getLoanProductById(id: string): LoanProduct | undefined {
  return loanProducts.find(product => product.id === id);
}

/**
 * Get interest rate for savings product
 */
export function getSavingsInterestRate(productType: string): number {
  const product = getSavingsProductById(productType);
  return product ? product.interestRate / 100 : 0.06; // Default 6%
}

/**
 * Get interest rate for loan product
 */
export function getLoanInterestRate(loanType: 'produktif' | 'konsumtif'): number {
  const product = getLoanProductById(loanType);
  return product ? product.interestRate / 100 : 0.01; // Default 1%
}
