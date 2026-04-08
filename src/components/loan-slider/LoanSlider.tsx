import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RNSlider from "@react-native-community/slider";

interface LoanSliderProps {
  label: string;
  displayValue: string;
  value: number;
  minimumValue: number;
  maximumValue: number;
  step: number;
  onValueChange: (value: number) => void;
}

const LoanSlider = ({
  label,
  displayValue,
  value,
  minimumValue,
  maximumValue,
  step,
  onValueChange,
}: LoanSliderProps) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{displayValue}</Text>
    </View>
    <RNSlider
      style={styles.slider}
      value={value}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      step={step}
      onValueChange={onValueChange}
      minimumTrackTintColor="#f60367"
      maximumTrackTintColor="#f8c0d0"
      thumbTintColor="#f60367"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  label: {
    fontSize: 15,
    color: "#000000",
    fontFamily: "OpenSans_400Regular",
  },
  value: {
    fontSize: 25,
    color: "#999999",
    fontFamily: "OpenSans_300Light",
  },
  slider: {
    width: "100%",
    height: 40,
  },
});

export default LoanSlider;
