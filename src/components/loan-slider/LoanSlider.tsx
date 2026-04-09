import React from "react";
import { View, Text } from "react-native";
import { styles } from "./LoanSlider.styles";
import RNSlider from "@react-native-community/slider";

interface LoanSliderProps {
  testID?: string;
  label: string;
  displayValue: string;
  value: number;
  minimumValue: number;
  maximumValue: number;
  step: number;
  onValueChange: (value: number) => void;
}

const LoanSlider = ({
  testID,
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
      testID={testID}
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


export default LoanSlider;
