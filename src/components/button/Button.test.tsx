import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./Button";

describe("Button", () => {
  it("renders the label correctly", () => {
    const { getByText } = render(
      <Button label="Get your quote »" onPress={() => {}} />,
    );
    expect(getByText("Get your quote »")).toBeTruthy();
  });

  it("calls onPress when tapped", () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button label="Get your quote »" onPress={onPress} />,
    );
    fireEvent.press(getByText("Get your quote »"));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
