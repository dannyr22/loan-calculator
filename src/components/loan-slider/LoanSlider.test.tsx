import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoanSlider from "./LoanSlider";
import { strings } from "../../strings";

const defaultProps = {
  testID: "test-slider",
  label: strings.homeScreen.amountLabel,
  displayValue: "£7,500.00",
  value: 7500,
  minimumValue: 1000,
  maximumValue: 20000,
  step: 100,
  onValueChange: () => {},
};

describe("LoanSlider", () => {
  it("renders the label and value", () => {
    const { getByText } = render(<LoanSlider {...defaultProps} />);
    expect(getByText(strings.homeScreen.amountLabel)).toBeTruthy();
    expect(getByText("£7,500.00")).toBeTruthy();
  });

  it("calls onValueChange when slider moves", () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <LoanSlider {...defaultProps} onValueChange={onValueChange} />,
    );
    fireEvent(getByTestId("test-slider"), "valueChange", 8000);
    expect(onValueChange).toHaveBeenCalledWith(8000);
  });
});
