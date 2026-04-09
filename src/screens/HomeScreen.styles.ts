import { StyleSheet } from "react-native";
import { colors, spacing } from "../theme";

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    gap: spacing.lg,
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    borderRadius: 8,
    overflow: "hidden",
  },
});
