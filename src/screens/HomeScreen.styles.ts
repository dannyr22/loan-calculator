import { StyleSheet } from "react-native";
import { colors, spacing } from "../theme";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  gradient: {
    flex: 1,
  },
  content: {
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
