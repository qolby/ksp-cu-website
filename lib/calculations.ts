import type { LoanCalculationResult, PaymentScheduleItem, SavingsCalculationResult, SavingsDataPoint } from '@/types';

/**
 * Calculate loan payment details
 * @param amount - Loan amount in Rupiah
 * @param monthlyRate - Monthly interest rate (e.g., 0.01 for 1%)
 * @param months - Loan term in months
 * @returns Loan calculation result with payment schedule
 */
export function calculateLoanPayment(
  amount: number,
  monthlyRate: number,
  months: number
): LoanCalculationResult {
  const monthlyInterest = amount * monthlyRate;
  const monthlyPrincipal = amount / months;
  const monthlyPayment = monthlyPrincipal + monthlyInterest;
  const totalInterest = monthlyInterest * months;
  const totalPayment = amount + totalInterest;

  const schedule = generatePaymentSchedule(amount, monthlyRate, months);

  return {
    monthlyPayment,
    monthlyPrincipal,
    monthlyInterest,
    totalInterest,
    totalPayment,
    schedule,
  };
}

/**
 * Generate payment schedule for a loan
 * @param amount - Loan amount in Rupiah
 * @param monthlyRate - Monthly interest rate
 * @param months - Loan term in months
 * @returns Array of payment schedule items
 */
export function generatePaymentSchedule(
  amount: number,
  monthlyRate: number,
  months: number
): PaymentScheduleItem[] {
  const schedule: PaymentScheduleItem[] = [];
  const monthlyPrincipal = amount / months;
  const monthlyInterest = amount * monthlyRate;
  const monthlyPayment = monthlyPrincipal + monthlyInterest;

  let remainingBalance = amount;

  for (let month = 1; month <= months; month++) {
    remainingBalance -= monthlyPrincipal;

    schedule.push({
      month,
      principal: monthlyPrincipal,
      interest: monthlyInterest,
      totalPayment: monthlyPayment,
      remainingBalance: Math.max(0, remainingBalance),
    });
  }

  return schedule;
}

/**
 * Calculate savings growth with compound interest
 * @param initialDeposit - Initial deposit amount
 * @param monthlyContribution - Monthly contribution amount
 * @param annualRate - Annual interest rate (e.g., 0.06 for 6%)
 * @param years - Time period in years
 * @returns Savings calculation result with monthly data
 */
export function calculateSavingsGrowth(
  initialDeposit: number,
  monthlyContribution: number,
  annualRate: number,
  years: number
): SavingsCalculationResult {
  const monthlyRate = annualRate / 12;
  const months = years * 12;
  const monthlyData: SavingsDataPoint[] = [];

  let totalValue = initialDeposit;
  let totalDeposits = initialDeposit;

  // Add initial deposit as month 0
  monthlyData.push({
    month: 0,
    totalDeposits: initialDeposit,
    totalInterest: 0,
    totalValue: initialDeposit,
  });

  for (let month = 1; month <= months; month++) {
    // Add monthly contribution
    totalValue += monthlyContribution;
    totalDeposits += monthlyContribution;

    // Apply compound interest
    totalValue *= (1 + monthlyRate);

    const totalInterest = totalValue - totalDeposits;

    monthlyData.push({
      month,
      totalDeposits,
      totalInterest,
      totalValue,
    });
  }

  const finalData = monthlyData[monthlyData.length - 1];

  return {
    futureValue: finalData.totalValue,
    totalDeposits: finalData.totalDeposits,
    totalInterest: finalData.totalInterest,
    monthlyData,
  };
}
