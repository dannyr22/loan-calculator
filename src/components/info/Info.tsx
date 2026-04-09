import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Info.styles";
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

export default Info;
