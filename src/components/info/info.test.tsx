import React from "react";
import { render } from "@testing-library/react-native";
import Info from "./Info";
import { strings } from "../../strings";

describe("Info", () => {
  it("renders rate, repayment and labels", () => {
    const { getByText } = render(
      <Info interestRate={10} monthlyRepayment={285.78} />,
    );
    expect(getByText("10%")).toBeTruthy();
    expect(getByText("£285.78")).toBeTruthy();
    expect(getByText(strings.info.interestRate)).toBeTruthy();
    expect(getByText(strings.info.monthlyRepayment)).toBeTruthy();
  });
});
