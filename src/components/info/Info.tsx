import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatCurrency } from "../../utils/calculations";

interface InfoProps {
  interestRate: number;
  monthlyRepayment: number;
}

const Info = ({ interestRate, monthlyRepayment }: InfoProps) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Text style={styles.value}>{interestRate}%</Text>
      <Text style={styles.label}>Interest rate</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.value}>{formatCurrency(monthlyRepayment)}</Text>
      <Text style={styles.label}>Monthly repayment</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  value: {
    fontSize: 35,
    color: "#999999",
    fontFamily: "OpenSans_300Light",
  },
  label: {
    fontSize: 11,
    color: "#000000",
    marginTop: 4,
    fontFamily: "OpenSans_400Regular",
  },
});

export default Info;
