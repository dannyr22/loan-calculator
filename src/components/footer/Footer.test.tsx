import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Footer } from "./Footer";
import { strings } from "../../strings";

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ bottom: 0 }),
}));

const defaultProps = {
  amount: 7500,
  term: 30,
  interestRate: 10,
  monthlyRepayment: 283.59,
};

describe("Footer", () => {
  it("renders the button", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    expect(getByText(strings.homeScreen.button)).toBeTruthy();
  });

  it("shows a quote alert on press", () => {
    const { getByText } = render(<Footer {...defaultProps} />);
    fireEvent.press(getByText("Get your quote »"));
  });
});
