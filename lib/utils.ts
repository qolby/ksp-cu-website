import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format number to Indonesian Rupiah format
 * @param amount - The amount to format
 * @returns Formatted string like "Rp 1.500.000"
 */
export function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

/**
 * Parse Rupiah formatted string back to number
 * @param formatted - Formatted string like "Rp 1.500.000"
 * @returns Parsed number
 */
export function parseRupiah(formatted: string): number {
  return parseInt(formatted.replace(/[^0-9]/g, ''), 10) || 0;
}
