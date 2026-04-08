const TERM_LABELS: Record<number, string> = {
  6: "6 months",
  12: "1 year",
  18: "1½ years",
  24: "2 years",
  30: "2½ years",
  36: "3 years",
  42: "3½ years",
  48: "4 years",
  54: "4½ years",
  60: "5 years",
};

export const getInterestRate = (amount: number): number => {
  if (amount < 5000) return 5;
  if (amount < 10000) return 10;
  if (amount < 15000) return 15;
  return 20;
};

export const getMonthlyRepayment = (
  loanAmount: number,
  interestRate: number,
  term: number,
): number => {
  const rate = interestRate / 100 / 12;
  return (
    (loanAmount * (rate * Math.pow(1 + rate, term))) /
    (Math.pow(1 + rate, term) - 1)
  );
};

export const formatCurrency = (amount: number): string => {
  const formatted = amount.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `£${formatted}`;
};

export const formatTerm = (months: number): string =>
  TERM_LABELS[months] ?? `${months} months`;
