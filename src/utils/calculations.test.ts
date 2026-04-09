import {
  getInterestRate,
  getMonthlyRepayment,
  formatCurrency,
  formatTerm,
} from "./calculations";

describe("getInterestRate", () => {
  it("returns 5% under £5,000", () => {
    expect(getInterestRate(1000)).toBe(5);
    expect(getInterestRate(4999)).toBe(5);
  });

  it("returns 10% between £5,000 and £9,999", () => {
    expect(getInterestRate(5000)).toBe(10);
    expect(getInterestRate(9999)).toBe(10);
  });

  it("returns 15% between £10,000 and £14,999", () => {
    expect(getInterestRate(10000)).toBe(15);
    expect(getInterestRate(14999)).toBe(15);
  });

  it("returns 20% at £15,000 and above", () => {
    expect(getInterestRate(15000)).toBe(20);
    expect(getInterestRate(20000)).toBe(20);
  });
});

describe("getMonthlyRepayment", () => {
  it("calculates correctly", () => {
    expect(getMonthlyRepayment(7500, 10, 30)).toBeCloseTo(283.59, 2);
    expect(getMonthlyRepayment(1000, 5, 6)).toBeCloseTo(169.11, 2);
  });
});

describe("formatCurrency", () => {
  it("formats correctly", () => {
    expect(formatCurrency(7500)).toBe("£7,500.00");
    expect(formatCurrency(1000)).toBe("£1,000.00");
  });
});

describe("formatTerm", () => {
  it("formats months and years correctly", () => {
    expect(formatTerm(6)).toBe("6 months");
    expect(formatTerm(12)).toBe("1 year");
    expect(formatTerm(30)).toBe("2½ years");
    expect(formatTerm(60)).toBe("5 years");
  });
});
