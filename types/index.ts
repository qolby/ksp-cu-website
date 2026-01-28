// Type definitions for KSP CU Sinar Sejahtera Website

// Product Types
export interface SavingsProduct {
  id: string;
  name: string;
  interestRate: number;
  minDeposit: number;
  minBalance: number;
  withdrawalTerms: string;
  features: string[];
  requirements: string[];
  bestFor: string;
}

export interface LoanProduct {
  id: string;
  name: string;
  type: 'produktif' | 'konsumtif';
  interestRate: number;
  maxAmount: number;
  maxTerm: number;
  requirements: string[];
  processingTime: string;
}

// Calculator Types
export interface PaymentScheduleItem {
  month: number;
  principal: number;
  interest: number;
  totalPayment: number;
  remainingBalance: number;
}

export interface LoanCalculationResult {
  monthlyPayment: number;
  monthlyPrincipal: number;
  monthlyInterest: number;
  totalInterest: number;
  totalPayment: number;
  schedule: PaymentScheduleItem[];
}

export interface SavingsDataPoint {
  month: number;
  totalDeposits: number;
  totalInterest: number;
  totalValue: number;
}

export interface SavingsCalculationResult {
  futureValue: number;
  totalDeposits: number;
  totalInterest: number;
  monthlyData: SavingsDataPoint[];
}

// News/Blog Types
export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  category: string;
  author: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface MembershipInquiryFormData {
  name: string;
  email: string;
  phone: string;
  productInterest: 'simpanan' | 'pinjaman' | 'informasi-umum';
  message?: string;
}

// Site Configuration Types
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    whatsapp: string;
    officeHours: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  stats: {
    members: number;
    assets: string;
  };
}
