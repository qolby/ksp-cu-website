import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nama harus minimal 2 karakter').max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,12}$/, 'Nomor telepon tidak valid'),
  subject: z.string().min(3, 'Subjek harus minimal 3 karakter'),
  message: z.string().min(10, 'Pesan harus minimal 10 karakter').max(1000, 'Pesan maksimal 1000 karakter'),
});

/**
 * Membership inquiry form validation schema
 */
export const membershipInquirySchema = z.object({
  name: z.string().min(2, 'Nama harus minimal 2 karakter').max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,12}$/, 'Nomor telepon tidak valid'),
  productInterest: z.enum(['simpanan', 'pinjaman', 'informasi-umum'], {
    message: 'Pilih salah satu opsi',
  }),
  message: z.string().optional(),
});

/**
 * Loan calculator validation schema
 */
export const loanCalculatorSchema = z.object({
  amount: z.number().min(1000000, 'Jumlah pinjaman minimal Rp 1.000.000').max(50000000, 'Jumlah pinjaman maksimal Rp 50.000.000'),
  months: z.number().min(6, 'Jangka waktu minimal 6 bulan').max(36, 'Jangka waktu maksimal 36 bulan'),
  type: z.enum(['produktif', 'konsumtif'], {
    message: 'Pilih jenis pinjaman',
  }),
});

/**
 * Savings calculator validation schema
 */
export const savingsCalculatorSchema = z.object({
  initialDeposit: z.number().min(0, 'Setoran awal tidak boleh negatif'),
  monthlyContribution: z.number().min(0, 'Setoran bulanan tidak boleh negatif'),
  productType: z.enum(['saham', 'sukarela', 'harian', 'pendidikan', 'hari-raya'], {
    message: 'Pilih jenis simpanan',
  }),
  years: z.number().min(1, 'Jangka waktu minimal 1 tahun').max(10, 'Jangka waktu maksimal 10 tahun'),
});
