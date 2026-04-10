import React from "react";
import { Alert } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";
import { strings } from "../strings";
import { formatCurrency, formatTerm } from "../utils/calculations";

jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: ({ children }: { children: React.ReactNode }) => children,
  useSafeAreaInsets: () => ({ bottom: 0 }),
}));

jest.mock("expo-linear-gradient", () => ({
  LinearGradient: ({ children, onLayout }: { children: React.ReactNode; onLayout?: () => void }) => {
    if (onLayout) onLayout();
    return children;
  },
}));

describe("HomeScreen", () => {
  it("renders the sliders and info", () => {
    const { getByText } = render(<HomeScreen onLayout={() => {}} />);
    expect(getByText(strings.homeScreen.amountLabel)).toBeTruthy();
    expect(getByText(strings.homeScreen.termLabel)).toBeTruthy();
    expect(getByText(strings.info.interestRate)).toBeTruthy();
    expect(getByText(strings.info.monthlyRepayment)).toBeTruthy();
  });

  it("renders initial values", () => {
    const { getByText } = render(<HomeScreen onLayout={() => {}} />);
    expect(getByText(formatCurrency(7500))).toBeTruthy();
    expect(getByText(formatTerm(30))).toBeTruthy();
  });

  it("updates amount when slider changes", () => {
    const { getByTestId, getByText } = render(<HomeScreen onLayout={() => {}} />);
    fireEvent(getByTestId("amount-slider"), "valueChange", 10000);
    expect(getByText(formatCurrency(10000))).toBeTruthy();
  });

  it("updates term when slider changes", () => {
    const { getByTestId, getByText } = render(<HomeScreen onLayout={() => {}} />);
    fireEvent(getByTestId("term-slider"), "valueChange", 12);
    expect(getByText(formatTerm(12))).toBeTruthy();
  });

  it("shows a quote alert with correct values on button press", () => {
    const alertSpy = jest.spyOn(Alert, "alert");
    const { getByTestId, getByText } = render(<HomeScreen onLayout={() => {}} />);

    fireEvent(getByTestId("amount-slider"), "valueChange", 10000);
    fireEvent(getByTestId("term-slider"), "valueChange", 24);
    fireEvent.press(getByText(strings.homeScreen.button));

    expect(alertSpy).toHaveBeenCalledWith(
      strings.homeScreen.quoteTitle,
      expect.stringContaining(formatCurrency(10000)),
    );
    expect(alertSpy).toHaveBeenCalledWith(
      strings.homeScreen.quoteTitle,
      expect.stringContaining(formatTerm(24)),
    );
  });
});
