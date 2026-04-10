import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Info.styles";
import { formatCurrency } from "../../utils/calculations";
import { strings } from "../../strings";

interface InfoProps {
  interestRate: number;
  monthlyRepayment: number;
}

const Info = ({ interestRate, monthlyRepayment }: InfoProps) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <Text style={styles.value}>{interestRate}%</Text>
      <Text style={styles.label}>{strings.info.interestRate}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.value}>{formatCurrency(monthlyRepayment)}</Text>
      <Text style={styles.label}>{strings.info.monthlyRepayment}</Text>
    </View>
  </View>
);

export default Info;
