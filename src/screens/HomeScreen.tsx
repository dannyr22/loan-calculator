import React, { useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "./HomeScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LoanSlider from "../components/loan-slider/LoanSlider";
import Button from "../components/button/Button";
import {
  getInterestRate,
  getMonthlyRepayment,
  formatCurrency,
  formatTerm,
} from "../utils/calculations";
import Info from "../components/info/Info";

const HomeScreen = ({ onLayout }: { onLayout: () => void }) => {
  const [amount, setAmount] = useState(7500);
  const [term, setTerm] = useState(30);

  const interestRate = getInterestRate(amount);
  const monthlyRepayment = getMonthlyRepayment(amount, interestRate, term);

  const handleQuote = () => {
    Alert.alert(
      "Your Quote",
      `Loan: ${formatCurrency(amount)}\nTerm: ${formatTerm(term)}\nInterest rate: ${interestRate}%\nMonthly repayment: 
  ${formatCurrency(monthlyRepayment)}`,
    );
  };

  return (
    <LinearGradient
      colors={["#383b7e", "#f60367"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
      onLayout={onLayout}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.card}>
          <LoanSlider
            testID="amount-slider"
            label="I want to borrow"
            displayValue={formatCurrency(amount)}
            value={amount}
            minimumValue={1000}
            maximumValue={20000}
            step={100}
            onValueChange={setAmount}
          />
          <LoanSlider
            testID="term-slider"
            label="over"
            displayValue={formatTerm(term)}
            value={term}
            minimumValue={6}
            maximumValue={60}
            step={6}
            onValueChange={setTerm}
          />
          <Info
            interestRate={interestRate}
            monthlyRepayment={monthlyRepayment}
          />
        </View>
        <Button label="Get your quote »" onPress={handleQuote} />
      </SafeAreaView>
    </LinearGradient>
  );
};


export default HomeScreen;
