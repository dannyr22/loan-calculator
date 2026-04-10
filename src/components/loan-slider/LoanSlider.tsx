import React from "react";
import { View, Text } from "react-native";
import { styles } from "./LoanSlider.styles";
import RNSlider from "@react-native-community/slider";
import { colors } from "../../theme";

interface LoanSliderProps {
  testID?: string;
  label: string;
  displayValue: string;
  value: number;
  minimumValue: number;
  maximumValue: number;
  step: number;
  onValueChange: (value: number) => void;
  showSteps?: boolean;
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
  showSteps = false,
}: LoanSliderProps) => {
  const stepCount = Math.round((maximumValue - minimumValue) / step) + 1;
  const progress = (value - minimumValue) / (maximumValue - minimumValue);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{displayValue}</Text>
      </View>
      <View style={styles.sliderContainer}>
        <View style={styles.trackBackground}>
          <View style={[styles.trackFill, { flex: progress }]} />
          <View style={{ flex: 1 - progress }} />
        </View>
        <RNSlider
          testID={testID}
          style={styles.slider}
          value={value}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          onValueChange={onValueChange}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor={colors.primary}
        />
        {showSteps && (
          <View style={styles.ticks}>
            {Array.from({ length: stepCount }).map((_, i) =>
              i === 0 || i === stepCount - 1 ? (
                <View key={i} style={styles.tickSpacer} />
              ) : (
                <View key={i} style={styles.tick} />
              )
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default LoanSlider;
