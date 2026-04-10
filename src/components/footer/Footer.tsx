import { Alert, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../button/Button";
import { strings } from "../../strings";
import { formatCurrency, formatTerm } from "../../utils/calculations";
import { styles } from "./Footer.styles";
import { spacing } from "../../theme";

interface FooterProps {
  amount: number;
  term: number;
  interestRate: number;
  monthlyRepayment: number;
}

export const Footer = ({
  amount,
  term,
  interestRate,
  monthlyRepayment,
}: FooterProps) => {
  const { bottom } = useSafeAreaInsets();

  const handleQuote = () => {
    Alert.alert(
      "Your Quote",
      `Loan: ${formatCurrency(amount)}\nTerm: ${formatTerm(term)}\nInterest rate: ${interestRate}%\nMonthly repayment: 
  ${formatCurrency(monthlyRepayment)}`,
    );
  };

  return (
    <View style={[styles.container, { paddingTop: spacing.xl + bottom }]}>
      <Button label={strings.homeScreen.button} onPress={handleQuote} />
      <View style={{ height: bottom }} />
    </View>
  );
};
